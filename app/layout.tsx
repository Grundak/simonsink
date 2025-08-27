import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "My Art Website",
  description: "Gallery, Art & Contact",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en, cs">
      <body className="flex flex-col justify-center font-sans">
        <Navbar />
        <main className="flex-1 container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
