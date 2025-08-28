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
      </head>
      <body className="flex flex-col justify-center font-sans">
          <Navbar />
          <main className="flex-1 container mx-auto p-6">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
