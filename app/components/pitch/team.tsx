import Image from "next/image";

import type { Locale } from "@/utils/locale";

import heidelbergLogo from "@/app/assets/heidelberg-logo-full.png";
import rabanHead from "@/app/assets/raban-head.png";
import tuebingenLogo from "@/app/assets/tuebingen-logo.png";

import { CatBox } from "./cat-box";

// The team slide from the pitch deck (Raban Pitch v2, slide 8), on /about: the
// two founders as the drawn heads at the two edges, the cat in its box between
// them, the universities beneath — the slide's own arrangement, spread across
// the full content width — and a short who-we-are under it. The PNGs are ink
// drawings, so in dark they take invert + hue-rotate: the ink flips to light
// while the red lands back on red — the same inversion the tokens do, just for
// raster images.
const DARK_IMG = "dark:[filter:invert(1)_hue-rotate(180deg)]";

const T = {
  de: {
    physics: "Physik",
    anthropology: "Anthropologie",
    headAlt: "Gezeichneter Kopf mit Wissen darin",
    para: "Raban wird von zwei Gründern gebaut. Simon Waiß (Physik, Universität Tübingen) entwickelt die Technik. Johannes Koch (Anthropologie, Universität Heidelberg) versteht Unternehmen als das, was sie zuerst sind: soziale Systeme. Gemeinsam holen wir Wissen aus den Köpfen — und machen es für alle im Betrieb zugänglich.",
  },
  en: {
    physics: "Physics",
    anthropology: "Anthropology",
    headAlt: "Line-drawn head with knowledge inside",
    para: "Raban is built by two founders. Simon Waiß (physics, University of Tübingen) builds the technology. Johannes Koch (anthropology, Heidelberg University) understands companies as what they are first: social systems. Together we get knowledge out of people's heads — and make it accessible to everyone in the company.",
  },
} as const;

export function TeamBlock({ locale = "de" }: { locale?: Locale }) {
  const t = T[locale];
  return (
    <div className="space-y-[var(--header-gap)]">
      <div className="grid w-full items-end gap-[var(--header-gap)] sm:grid-cols-[1fr_auto_1fr]">
        <div className="flex flex-col items-center gap-[var(--header-gap)] sm:items-start">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-1">
              <p className="whitespace-nowrap font-semibold">Simon Waiß</p>
              <p className="text-[12px]">{t.physics}</p>
            </div>
            <Image
              src={rabanHead}
              alt={t.headAlt}
              className={`h-64 w-auto [transform:scaleX(-1)_rotate(-10deg)] lg:h-80 ${DARK_IMG}`}
            />
          </div>
          <Image
            src={tuebingenLogo}
            alt="Eberhard Karls Universität Tübingen"
            className={`h-14 w-auto lg:h-20 ${DARK_IMG}`}
          />
        </div>
        <CatBox className="w-40 justify-self-center lg:w-56" locale={locale} />
        <div className="flex flex-col items-center gap-[var(--header-gap)] sm:items-end">
          <div className="flex items-center gap-8">
            <Image
              src={rabanHead}
              alt={t.headAlt}
              className={`h-64 w-auto [transform:rotate(-10deg)] lg:h-80 ${DARK_IMG}`}
            />
            <div className="flex flex-col items-center gap-1">
              <p className="whitespace-nowrap font-semibold">Johannes Koch</p>
              <p className="text-[12px]">{t.anthropology}</p>
            </div>
          </div>
          <Image
            src={heidelbergLogo}
            alt="Universität Heidelberg"
            className={`h-16 w-auto lg:h-24 ${DARK_IMG}`}
          />
        </div>
      </div>
      <p className="max-w-[var(--measure)]">{t.para}</p>
    </div>
  );
}
