import { NextResponse } from "next/server"

const ALANYA = { latitude: 36.5444, longitude: 31.9994 }

export async function GET() {
  try {
    const [ratesResponse, weatherResponse, marineResponse] = await Promise.all([
      fetch("https://api.frankfurter.app/latest?from=TRY&to=USD,EUR,GBP", { next: { revalidate: 900 } }),
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${ALANYA.latitude}&longitude=${ALANYA.longitude}&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m&timezone=Europe%2FIstanbul`, { next: { revalidate: 900 } }),
      fetch(`https://marine-api.open-meteo.com/v1/marine?latitude=${ALANYA.latitude}&longitude=${ALANYA.longitude}&current=sea_surface_temperature&timezone=Europe%2FIstanbul`, { next: { revalidate: 900 } }),
    ])
    if (!ratesResponse.ok || !weatherResponse.ok || !marineResponse.ok) return NextResponse.json({ error: "Live data unavailable" }, { status: 502 })
    const [rates, weather, marine] = await Promise.all([ratesResponse.json(), weatherResponse.json(), marineResponse.json()])
    return NextResponse.json({ rates: rates.rates, weather: weather.current, marine: marine.current })
  } catch {
    return NextResponse.json({ error: "Live data unavailable" }, { status: 502 })
  }
}
