export const site = {
  name: "Alanya Kale Matbaa",
  // WhatsApp / phone number in international format without "+" for wa.me links
  whatsapp: "905309305564",
  phoneDisplay: "+90 530 930 55 64",
  email: "info@kalematbaa.com",
  domain: "kalematbaa.com",
  address: "Şekerhane Mahallesi, Hacı Karanfil Sokak No:15/A, Alanya, Antalya, Türkiye",
  addressShort: "Hacı Karanfil Sk. No:15/A, Alanya",
  // Google Maps embed query
  mapQuery: "Şekerhane Mahallesi Hacı Karanfil Sokak No:15/A Alanya Antalya",
}

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
