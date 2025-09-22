"use client";
import { useLang } from "../components/LanguageContext";

export default function Contact() {
  const { lang } = useLang();

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
      account: "Číslo účtu",
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
      account: "Bank Account",
    },
  };

  const info = {
    person: "Ing. Šimon Holomek",
    address: "U Červených domků 2975/32, 695 01, Hodonín",
    phone: "+420 735 963 200",
    mail: "simons.ink@email.cz",
    ico: "21072035",
    account: "123456789/0100",
  };

  return (
    <section className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{labels[lang].title}</h1>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col gap-4 mb-10"
      >
        <input type="hidden" name="access_key" value="TVŮJ_WEB3FORMS_KEY" />
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
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
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
          <li>
            <strong>{labels[lang].account}:</strong> {info.account}
          </li>
        </ul>
      </div>
    </section>
  );
}