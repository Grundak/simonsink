import { LangProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import "./fonts.css";

export const metadata = {
  title: "My Art Website",
  description: "Gallery, Art & Contact",
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
      </head>
      <body className="flex flex-col justify-center font-sans dark:bg-black">
        <LangProvider>
          <Navbar />
          <main className="flex-1 container mx-auto p-6">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
