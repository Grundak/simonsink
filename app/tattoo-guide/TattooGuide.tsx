"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "../components/LanguageContext";
import content from "./content.json";

const labels = {
  EN: {
    title: "Tattoo Guide",
    intro: "From your first idea to looking after your tattoo. Take your time, find what you need, and get to know the process.",
    contents: "In this guide",
    questions: "Have a question?",
    help: "Let’s talk about your tattoo.",
    contact: "Get in touch",
    top: "Back to top",
  },
  CS: {
    title: "Tattoo Guide",
    intro: "Od prvního nápadu až po péči o tetování. Projdi si vše v klidu, najdi, co tě zajímá, a seznam se s celým procesem.",
    contents: "V tomto průvodci",
    questions: "Máš otázku?",
    help: "Pojďme probrat tvoje tetování.",
    contact: "Napiš mi",
    top: "Zpět nahoru",
  },
};

export default function TattooGuide() {
  const { lang } = useLang();
  const reducedMotion = useReducedMotion();
  const topics = content[lang];
  const text = labels[lang];

  const contents = (
    <ol className="space-y-1">
      {topics.map((topic, index) => (
        <li key={topic.id}>
          <a
            href={`#${topic.id}`}
            className="group flex items-baseline gap-3 rounded py-2 text-sm leading-5 text-neutral-600 transition hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-neutral-400 dark:hover:text-white"
          >
            <span className="w-5 shrink-0 text-xs tabular-nums text-neutral-400 dark:text-neutral-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{topic.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <motion.main
      id="guide-top"
      lang={lang === "CS" ? "cs" : "en"}
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
        <h1
          className="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl"
        >
          {text.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          {text.intro}
        </p>
      </header>

      <details className="mb-10 rounded-lg border border-neutral-200 px-5 py-4 lg:hidden dark:border-neutral-800">
        <summary className="cursor-pointer py-1 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4">
          {text.contents}
        </summary>
        <nav aria-label={text.contents} className="mt-4 border-t border-neutral-200 pt-3 dark:border-neutral-800">
          {contents}
        </nav>
      </details>

      <div className="grid min-w-0 gap-12 lg:grid-cols-[15rem_minmax(0,1fr)] xl:gap-16">
        <aside className="sticky top-8 hidden max-h-[calc(100dvh-4rem)] self-start overflow-y-auto border-r border-neutral-200 pr-6 lg:block dark:border-neutral-800">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest">
            {text.contents}
          </p>
          <nav aria-label={text.contents}>{contents}</nav>
        </aside>

        <article className="min-w-0 max-w-[44rem]">
          {topics.map((topic, index) => (
            <section
              id={topic.id}
              key={topic.id}
              aria-labelledby={`${topic.id}-heading`}
              className="mb-10 scroll-mt-8 border-b border-neutral-200 pb-10 last:mb-0 sm:mb-14 sm:pb-14 dark:border-neutral-800"
            >
              <p aria-hidden="true" className="mb-3 text-sm tabular-nums text-neutral-400 dark:text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 id={`${topic.id}-heading`} className="mb-6 text-2xl leading-snug font-semibold sm:text-3xl">
                {topic.title}
              </h2>
              <div className="space-y-5 text-base leading-8 text-neutral-700 sm:text-lg dark:text-neutral-300">
                {topic.blocks.map((block, blockIndex) =>
                  block.type === "heading" ? (
                    <h3 key={blockIndex} className="border-l-2 border-black pl-4 pt-1 text-lg leading-relaxed font-semibold text-black [&:not(:first-child)]:mt-8 dark:border-white dark:text-white">
                      {block.text}
                    </h3>
                  ) : (
                    <p key={blockIndex}>{block.text}</p>
                  )
                )}
              </div>
            </section>
          ))}

          <div className="flex flex-col items-start gap-6 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-2xl font-semibold">{text.questions}</p>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">{text.help}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-11 shrink-0 items-center gap-3 rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              {text.contact} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <a href="#guide-top" className="mt-10 inline-flex min-h-11 items-center gap-2 text-sm text-neutral-500 underline underline-offset-4 hover:text-black dark:text-neutral-400 dark:hover:text-white">
            {text.top} <span aria-hidden="true">↑</span>
          </a>
        </article>
      </div>
    </motion.main>
  );
}
