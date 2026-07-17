export const site = {
  name: "Alanya Kale Matbaa",
  // WhatsApp number in international format without "+" for wa.me links
  whatsapp: "905309305564",
  whatsappDisplay: "+90 530 930 55 64",
  // Landline phone
  phone: "+90 242 513 48 30",
  phoneHref: "+902425134830",
  // Backwards-compatible alias used across the UI
  phoneDisplay: "+90 530 930 55 64",
  email: "info@kalematbaa.com",
  domain: "kalematbaa.com",
  url: "https://kalematbaa.com",
  address: "Şekerhane Mahallesi, Hacı Karanfil Sokak No:15/A, 07400 Alanya, Antalya, Türkiye",
  addressShort: "Hacı Karanfil Sk. No:15/A, Alanya",
  street: "Şekerhane Mahallesi, Hacı Karanfil Sokak No:15/A",
  postalCode: "07400",
  city: "Alanya",
  region: "Antalya",
  country: "TR",
  geo: { lat: 36.5445, lng: 31.9985 },
  // Google Maps embed query
  mapQuery: "Şekerhane Mahallesi Hacı Karanfil Sokak No:15/A Alanya Antalya",
}

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
