"use client";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "./LanguageContext";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutSection() {
  const { lang } = useLang();
  const reducedMotion = useReducedMotion();

  const paragraphs = {
    CS: [
      "K tetování jsem se dostal přes kreslení. Vždy mě fascinovala jednoduchost ostré tužky, která dokáže zachytit každý detail. Smysl pro preciznost a kreativitu mě provází už od dětství.",
      "Po deseti letech služby v armádě jsem se rozhodl naplno věnovat tomu, co mě skutečně naplňuje.",
      "Co mám na tetování nejraději? Všechno. Od komunikace s klienty a pochopení jejich představ, přes tvorbu originálních návrhů s důrazem na detail a sladění kompozice s tělem, až po samotný proces tetování.",
      "Tetování je pro mě umění, řemeslo i tvrdá práce. Pro vás by mělo být příjemným zážitkem a zdrojem hrdosti na dílo, které budete nosit celý život.",
      "Největší odměnou je pro mě kvalitní výsledek a vaše spokojenost.",
    ],
    EN: [
      "I discovered tattooing through drawing. I’ve always been fascinated by the simplicity of a sharp pencil, capable of capturing every detail. My sense of precision and creativity has been with me since childhood.",
      "After 10 years of service in the army, I decided to fully dedicate myself to what truly fulfills me.",
      "What do I love most about tattooing? Everything. From communicating with clients and understanding their ideas, to creating original designs with attention to detail and harmonizing the composition with the body, and finally, the tattooing process itself.",
      "For me, tattooing is art, craftsmanship, and hard work. For you, it should be an enjoyable experience and a source of pride in the art you’ll carry for a lifetime.",
      "The greatest reward for me is a high-quality result and your satisfaction.",
    ],
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.6, ease: "easeInOut" }}
      className="mx-auto w-full min-w-0 max-w-6xl px-4 py-10 sm:px-6 sm:py-16"
    >
      <header className="mb-10 max-w-3xl border-b border-black pb-8 sm:mb-12 sm:pb-10 dark:border-white">
        <p
          className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400"
          style={{ fontFamily: "Copperplate, sans-serif" }}
        >
          Simon&apos;s Ink
        </p>
        <h1 className="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
          Šimon Holomek
        </h1>
      </header>

      <div className="grid min-w-0 gap-10 lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-12 xl:gap-16">
        <div className="w-full max-w-sm lg:sticky lg:top-8 lg:self-start">
          <Image
            src="/images/about.webp"
            alt="About Simon"
            width={800}
            height={1000}
            className="h-auto w-full rounded-lg border border-neutral-200 object-cover dark:border-neutral-800"
            priority
          />
        </div>
        <div className="min-w-0 max-w-[44rem]">
          <div className="space-y-5 border-b border-neutral-200 pb-10 text-base leading-8 text-neutral-700 sm:pb-14 sm:text-lg dark:border-neutral-800 dark:text-neutral-300">
            {paragraphs[lang].map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="mt-8 flex justify-start sm:mt-10">
            <Link
              href="/tattoo-guide"
              className="inline-flex min-h-11 shrink-0 items-center gap-3 rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              aria-label={lang === "EN" ? "Go to Tattoo Guide" : "Přejít na Tattoo Guide"}
            >
              Tattoo Guide
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
