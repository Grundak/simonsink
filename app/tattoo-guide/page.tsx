import type { Metadata } from "next";
import TattooGuide from "./TattooGuide";

export const metadata: Metadata = {
  title: "Tattoo Guide | Simon's Ink",
  description:
    "Průvodce tetováním od Šimona Holomka. Příprava, návrh, průběh tetování a následná péče. Tattoo preparation, design and aftercare in English and Czech.",
};

export default function TattooGuidePage() {
  return <TattooGuide />;
}
