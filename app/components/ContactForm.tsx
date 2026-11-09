"use client";
import { useLang } from "./LanguageContext";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function ContactForm() {
  const { lang } = useLang();
  const reducedMotion = useReducedMotion();

  const labels = {
    CS: {
      title: "Kontakt",
      name: "Jméno",
      email: "Email",
      message: "Zpráva",
      send: "Odeslat",
      person: "Jméno",
      address: "Působistě",
      phone: "Telefon",
      mail: "Email",
      ico: "IČO",
    },
    EN: {
      title: "Contact",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      person: "Name",
      address: "Address",
      phone: "Phone",
      mail: "Email",
      ico: "Company ID",
    },
  };

  const info = {
    person: "Ing. Šimon Holomek",
    address: "Vídeňská 22b, 639 00, Brno",
    phone: "+420 735 963 200",
    mail: "simons.ink@email.cz",
    ico: "21072035",
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.6, ease: "easeInOut" }}
      className="max-w-xl mx-auto py-12 px-4"
      style={{ overflow: "hidden" }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">{labels[lang].title}</h1>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col gap-4 mb-10"
      >
        <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
        <input
          type="text"
          name="name"
          required
          placeholder={labels[lang].name}
          className="border rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          required
          placeholder={labels[lang].email}
          className="border rounded px-4 py-2"
        />
        <textarea
          name="message"
          required
          placeholder={labels[lang].message}
          className="border rounded px-4 py-2 min-h-[120px]"
        />
        <button
          type="submit"
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          {labels[lang].send}
        </button>
      </form>
      <div className="bg-gray-50 dark:bg-black rounded-lg p-6 shadow text-left">
        <ul className="space-y-2">
          <li>
            <strong>{labels[lang].person}:</strong> {info.person}
          </li>
          <li>
            <strong>{labels[lang].address}:</strong> {info.address}
          </li>
          <li>
            <strong>{labels[lang].phone}:</strong>{" "}
            <a href={`tel:${info.phone}`} className="underline hover:text-gray-500">
              {info.phone}
            </a>
          </li>
          <li>
            <strong>{labels[lang].mail}:</strong>{" "}
            <a href={`mailto:${info.mail}`} className="underline hover:text-gray-500">
              {info.mail}
            </a>
          </li>
          <li>
            <strong>{labels[lang].ico}:</strong> {info.ico}
          </li>
        </ul>
      </div>
            <div className="mt-12 flex justify-center">
        <Link
          href="/about"
          className="inline-flex min-h-11 shrink-0 items-center gap-3 rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          aria-label={lang === "EN" ? "About me" : "O mně"}
        >
          {lang === "EN" ? "About me" : "O mně"}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.section>
  );
}
