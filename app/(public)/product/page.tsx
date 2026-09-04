import { FlowSection, LoopSection, PricingSection } from "@/app/components/pitch/sections";
import { getLocale } from "@/utils/locale-server";

// The product half of the pitch deck (Raban Pitch v2, slides 5–7): how it
// works, the verification loop, ownership and pricing. The same sections form
// the home page's Lösung chapter; here they are top-level, so level 2.
const H1 = { de: "Produkt", en: "Product" } as const;

export default async function ProductPage() {
  const locale = await getLocale();
  return (
    <main className="px-[var(--gutter)] pb-[var(--content-gap)] pt-[var(--content-top)]">
      <div className="space-y-[var(--content-gap)] text-base text-ink">
        <h1 className="text-[length:var(--h1)] font-black leading-[var(--h1-line)]">
          {H1[locale]}
        </h1>
        <FlowSection locale={locale} level={2} />
        <LoopSection locale={locale} level={2} />
        <PricingSection locale={locale} level={2} />
      </div>
    </main>
  );
}
