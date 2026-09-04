import Link from "next/link"
import { ArrowDownToLine, ArrowLeft, FileImage } from "lucide-react"

const logos = [
  { name: "Alanya Kale Matbaa Logo", file: "/images/kalematbaalogo.svg" },
]

export default function LogolarPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-secondary/40 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> Ana Sayfa
          </Link>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Marka kaynakları</p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">Logolar</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Tasarımlarınızda kullanmak için Alanya Kale Matbaa logolarını SVG formatında indirin.</p>
        </div>
      </section>
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div><h2 className="font-heading text-2xl font-semibold">İndirilebilir logolar</h2><p className="mt-2 text-sm text-muted-foreground">Vektörel SVG dosyaları baskı ve dijital tasarımlar için uygundur.</p></div>
            <span className="hidden rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground sm:inline-flex">{logos.length} dosya</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {logos.map((logo) => (
              <article key={logo.file} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="flex h-56 items-center justify-center bg-white p-8"><img src={logo.file} alt={logo.name} className="max-h-full max-w-full object-contain" /></div>
                <div className="flex items-center justify-between gap-4 border-t border-border p-5"><div className="flex min-w-0 items-center gap-3"><FileImage className="size-5 shrink-0 text-accent" /><div className="min-w-0"><h3 className="truncate font-semibold">{logo.name}</h3><p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">SVG · Vektörel</p></div></div><a href={logo.file} download className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90" aria-label={`${logo.name} indir`}><ArrowDownToLine className="size-4" /> İndir</a></div>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-secondary/30 p-6 text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Dosya kullanımı:</strong> SVG formatı logoyu kalite kaybı olmadan büyütmenizi sağlar. Renk, ölçü veya farklı logo dosyası ihtiyacınız varsa bizimle iletişime geçebilirsiniz.</div>
        </div>
      </section>
    </main>
  )
}
