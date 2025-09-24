import { LangProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import "./fonts.css";

export const metadata = {
  title: "Simon's Ink | Tattoo Brno & Hodonín",
  description:
    "Originální tetování v Brně a Hodoníně. Precizní práce, osobní přístup a kvalitní výsledek. Rezervujte si termín ještě dnes!",
  keywords: [
    "tetování",
    "tattoo",
    "Šimon Holomek",
    "tatér",
    "tattoo",
    "Brno",
    "Hodonín",
    "Simon's Ink",
    "tattoo artist",
    "tetovací studio",
    "rezervace",
    "tattoo gallery",
  ],
  openGraph: {
    title: "Simon's Ink | Tattoo Brno & Hodonín",
    description:
      "Originální tetování v Brně a Hodoníně. Precizní práce, osobní přístup a kvalitní výsledek.",
    url: "https://realbrandink.com", // uprav na svou doménu
    siteName: "Simon's Ink",
    images: [
      {
        url: "/images/about.webp", // nahraj obrázek do public/images/
        width: 1200,
        height: 630,
        alt: "Simon's Ink Tattoo",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon's Ink | Tattoo Brno & Hodonín",
    description:
      "Originální tetování v Brně a Hodoníně. Precizní práce, osobní přístup a kvalitní výsledek.",
    images: ["/images/about.webp"], // nahraj obrázek do public/images/
  },
  author: "Šimon Holomek",
  creator: "Šimon Holomek",
  publisher: "Šimon Holomek",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      </head>
      <body className="flex flex-col justify-center font-sans dark:bg-black">
        <LangProvider>
          <Navbar />
          {children}
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
