import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"
import { products } from "@/lib/products"

export const metadata: Metadata = pageMetadata({
  path: "/urunlerimiz",
  title: "Matbaa Ürünlerimiz | Kaşe, Broşür, Kartvizit - Printing Products in Alanya",
  description:
    "Alanya Kale Matbaa ürünleri: kaşe, broşür, davetiye, kartvizit, afiş, etiket, karton çanta, magnet ve daha fazlası. Alanya'nın en kaliteli baskı çözümleri.",
  keywords: [
    "Alanya matbaa ürünleri",
    "kaşe Alanya",
    "kartvizit baskı Alanya",
    "broşür baskı",
    "afiş baskı Alanya",
    "etiket baskı",
    "karton çanta baskı",
    "printing products Alanya",
  ],
})

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  // ItemList of Product entities for richer product-listing SEO.
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Alanya Kale Matbaa Matbaa Ürünleri",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.content.tr.title,
        description: product.content.tr.desc,
        image: `${site.url}${product.image}`,
        brand: { "@type": "Brand", name: site.name },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "TRY",
          seller: { "@type": "LocalBusiness", name: site.name, "@id": `${site.url}/#business` },
        },
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {children}
    </>
  )
}
