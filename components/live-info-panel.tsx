"use client"

import useSWR from "swr"
import type { ComponentProps } from "react"
import { CloudSun, Droplets, Euro, Gauge, PoundSterling, Sun, Wind } from "lucide-react"

type LiveData = {
  rates: { USD: number; EUR: number; GBP: number }
  weather: { temperature: number; windSpeed: number; windDirection: number; weatherCode: number }
  waterTemperature: number | null
}

const fetcher = async (): Promise<LiveData> => {
  const response = await fetch("/api/live-info")
  if (!response.ok) throw new Error("Live data unavailable")
  const payload = await response.json()
  return {
    rates: payload.rates,
    weather: {
      temperature: payload.weather.temperature_2m,
      windSpeed: payload.weather.wind_speed_10m,
      windDirection: payload.weather.wind_direction_10m,
      weatherCode: payload.weather.weather_code,
    },
    waterTemperature: payload.marine?.sea_surface_temperature ?? null,
  }
}

function weatherLabel(code: number) {
  if (code === 0) return "Açık"
  if (code < 4) return "Parçalı bulutlu"
  if (code < 80) return "Bulutlu"
  return "Yağışlı"
}

function windDirection(degrees: number) {
  return ["K", "KD", "D", "GD", "G", "GB", "B", "KB"][Math.round(degrees / 45) % 8]
}

export function LiveInfoPanel() {
  const { data, error, isLoading } = useSWR("alanya-live-info", fetcher, { refreshInterval: 15 * 60 * 1000, revalidateOnFocus: false })

  return (
    <div className="mt-5 border-t border-primary-foreground/10 pt-4" aria-live="polite">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <p className="font-heading text-sm font-semibold text-primary-foreground">Alanya Güncel Bilgiler</p>
          <p className="text-[11px] text-primary-foreground/55">Döviz, hava ve deniz durumu</p>
        </div>
        <CloudSun className="size-4 text-accent" aria-hidden="true" />
      </div>
      {isLoading ? <p className="text-xs text-primary-foreground/60">Bilgiler yükleniyor...</p> : error || !data ? <p className="text-xs text-primary-foreground/60">Bilgiler şu anda alınamıyor.</p> : (
        <div className="flex flex-col gap-3 text-xs">
          <div className="grid grid-cols-3 gap-2">
            {([ ["USD", data.rates.USD, DollarIcon], ["EUR", data.rates.EUR, Euro], ["GBP", data.rates.GBP, PoundSterling] ] as const).map(([code, rate, Icon]) => (
              <div key={code} className="flex items-center gap-1.5 rounded-md bg-primary-foreground/5 px-2 py-2">
                <Icon className="size-3 text-accent" aria-hidden="true" />
                <span className="font-semibold">{code}</span>
                <span className="ml-auto text-primary-foreground/70">₺{(1 / rate).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 text-primary-foreground/75">
            <span className="flex items-center gap-1.5"><Sun className="size-3.5 text-accent" />{data.weather.temperature}°C · {weatherLabel(data.weather.weatherCode)}</span>
            <span className="flex items-center gap-1.5"><Wind className="size-3.5 text-accent" />{data.weather.windSpeed} km/sa · {windDirection(data.weather.windDirection)}</span>
            <span className="flex items-center gap-1.5"><Droplets className="size-3.5 text-accent" />Su: {data.waterTemperature ?? "—"}°C</span>
            <span className="flex items-center gap-1.5"><Gauge className="size-3.5 text-accent" />Alanya merkez</span>
          </div>
        </div>
      )}
    </div>
  )
}

function DollarIcon(props: ComponentProps<typeof Gauge>) {
  return <span className="text-[11px] font-bold" {...props}>$</span>
}
