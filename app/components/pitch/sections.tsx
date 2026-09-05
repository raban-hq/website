import type { Locale } from "@/utils/locale";

import { KnowledgeFlowChart } from "./knowledge-flow";
import { KnowledgeLivesChart } from "./knowledge-lives";
import { OwnershipPricingChart } from "./ownership-pricing";
import { VerificationLoopChart } from "./verification-loop";

// The pitch deck (Raban Pitch v2) as page sections, one per slide: a heading,
// the slide's graphic spanning the full content width (each chart brings its
// own narrow layout for phones and tablets), and beneath it two or
// three sentences of customer-facing copy — what a buyer needs from that slide,
// condensed from the founders' spoken script and addressed to the reader.
//
// The home page groups them as PROBLEM (slide 2, where knowledge lives) and
// LÖSUNG (slides 5–7: how it works, the verification loop, ownership and
// pricing); the two statistic slides (3 and 4) and the investor-facing closer
// are left out, and the team slide lives on /about. /product repeats 5–7 as
// its own top-level sections — hence the `level` prop, which sets the heading
// element: h3 under the home page's h2 groups, h2 under /product's h1.
// Every graphic and every sentence here is outward communication and needs
// founder sign-off before it goes live.

type Props = { locale: Locale; level?: 2 | 3 };

// Slide titles read the --h2 scale whichever element they are: rank on the
// page changes, their size relative to the graphic below them does not.
const TITLE = "text-[length:var(--h2)] font-semibold leading-[var(--h2-line)]";
// The spoken text: a step up from body, on a wider measure than long-form
// prose, so it holds its own under a graphic that spans the whole page.
const PARA = "max-w-[56rem] text-lg";

function Title({ level = 3, children }: { level?: 2 | 3; children: React.ReactNode }) {
  return level === 2 ? <h2 className={TITLE}>{children}</h2> : <h3 className={TITLE}>{children}</h3>;
}

const T = {
  de: {
    lives: {
      title: "Wo das Wissen im Unternehmen liegt",
      para: "Wissen liegt an zwei Orten: dokumentiert in verstreuten Systemen — und undokumentiert in den Menschen, die den Betrieb am Laufen halten. Wenn diese Menschen in Rente gehen, geht ihr Wissen mit.",
    },
    flow: {
      title: "So funktioniert Raban",
      para: "Ihr Experte erklärt — so, wie er es einem Azubi erklären würde: in Sprache, Bild und Text. Die KI fragt nach, bis sie sicher verstanden hat. Danach fragen alle anderen einfach — Azubi, Kollegen, HR — und bekommen die Antwort in dem Format, das sie brauchen.",
    },
    loop: {
      title: "Die Verifikationsschleife",
      para: "Nichts landet ungeprüft in Ihrer Wissensbasis. Die KI hört zu, fragt nach und leitet dann eine zweite Person durch dieselbe Aufgabe — Ihr Experte steht daneben und entscheidet, was gut genug ist. Jede Antwort nennt das Interview und die Person, von der sie stammt. Fehlt etwas, fragt das System die Person, die es weiß.",
    },
    pricing: {
      title: "Eigentum und Preis",
      para: "Ihr Wissen gehört Ihnen und bleibt in Deutschland oder Europa — wir bauen und pflegen die Architektur darum herum. Sie zahlen einmalig die Einrichtung, eine kleine Grundgebühr für Wartung und Updates, und darüber hinaus nur, was Sie tatsächlich nutzen.",
    },
  },
  en: {
    lives: {
      title: "Where company knowledge lives",
      para: "Knowledge lives in two places: documented, in scattered systems — and undocumented, in the people who keep the company running. When those people retire, their knowledge leaves with them.",
    },
    flow: {
      title: "How Raban works",
      para: "Your expert explains — the way they would to a trainee: in speech, images and text. The AI asks back until it is sure it has understood. From then on everyone else simply asks — trainees, colleagues, HR — and gets the answer in the format they need.",
    },
    loop: {
      title: "The verification loop",
      para: "Nothing enters your knowledge base unverified. The AI listens, asks back, then guides a second person through the same task — your expert stands by and decides what is good enough. Every answer names the interview and the person it came from. If something is missing, the system asks the person who knows.",
    },
    pricing: {
      title: "Ownership and pricing",
      para: "Your knowledge is yours and stays in Germany or Europe — we build and maintain the architecture around it. You pay a one-time setup, a small base fee for maintenance and updates, and beyond that only what you actually use.",
    },
  },
} as const;

export function KnowledgeLivesSection({ locale, level }: Props) {
  const t = T[locale].lives;
  return (
    <section className="space-y-[var(--header-gap)]">
      <Title level={level}>{t.title}</Title>
      <KnowledgeLivesChart locale={locale} />
      <p className={PARA}>{t.para}</p>
    </section>
  );
}

export function FlowSection({ locale, level }: Props) {
  const t = T[locale].flow;
  return (
    <section className="space-y-[var(--header-gap)]">
      <Title level={level}>{t.title}</Title>
      <KnowledgeFlowChart locale={locale} />
      <p className={PARA}>{t.para}</p>
    </section>
  );
}

export function LoopSection({ locale, level }: Props) {
  const t = T[locale].loop;
  return (
    <section className="space-y-[var(--header-gap)]">
      <Title level={level}>{t.title}</Title>
      <VerificationLoopChart locale={locale} />
      <p className={PARA}>{t.para}</p>
    </section>
  );
}

export function PricingSection({ locale, level }: Props) {
  const t = T[locale].pricing;
  return (
    <section className="space-y-[var(--header-gap)]">
      <Title level={level}>{t.title}</Title>
      <OwnershipPricingChart locale={locale} />
      <p className={PARA}>{t.para}</p>
    </section>
  );
}
