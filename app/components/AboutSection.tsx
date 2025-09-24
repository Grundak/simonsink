"use client";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "./LanguageContext";
import { motion } from "framer-motion";

export default function AboutSection() {
  const { lang } = useLang();

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
    <motion.section
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="py-12 px-4 max-w-4xl mx-auto"
      style={{ overflow: "hidden" }}
    >
      {/* Wrapper pro obrázek + text */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <Image
            src="/images/about.webp"
            alt="About Simon"
            width={800}
            height={1000}
            className="rounded-lg object-cover max-w-[400px] w-full h-auto"
            priority
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left md:pl-8">
          <h1 className="text-3xl font-bold mb-4 hidden">
            {lang === "EN" ? "Šimon Holomek" : "Šimon Holomek"}
          </h1>
          {paragraphs[lang].map((text, idx) => (
            <div key={idx} className="w-full">
              <p className="text-lg mb-4">{text}</p>
              {idx < paragraphs[lang].length - 1 && (
                <span className="block w-full mx-0 my-4 h-1 bg-black dark:bg-white" />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Buttonek pod sekcí, vždy uprostřed */}
      <div className="w-full flex justify-center mt-12">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-xl font-semibold shadow hover:bg-gray-700 dark:hover:bg-gray-200 transition"
          aria-label={lang === "EN" ? "Back to Simon's Ink homepage" : "Zpět na úvodní stránku Simon's Ink"}
        >
          Simon&apos;s Ink
          <span className="ml-3">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </Link>
      </div>
    </motion.section>
  );
}