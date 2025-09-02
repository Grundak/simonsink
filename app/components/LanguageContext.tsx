"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "EN" | "CS";
type LangContextType = { lang: Lang; toggleLang: () => void };

const LangContext = createContext<LangContextType | undefined>(undefined);

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");
  const toggleLang = () => setLang((l) => (l === "EN" ? "CS" : "EN"));
  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}