// store/useLangStore.ts
// ─────────────────────────────────────────────────────────────────────────────
// Goldanýan diller
// ─────────────────────────────────────────────────────────────────────────────

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import tk from "@/dictionaries/tk.json";
import ru from "@/dictionaries/ru.json";
import en from "@/dictionaries/en.json";

// ─── Tipler ──────────────────────────────────────────────────────────────────

export type Lang = "tk" | "ru" | "en";

// Dictionary tipini tk.json-dan awtomatik çykarmak —
// ähli 3 faýl deň gurluşda bolmalydyr (ýogsam TypeScript error berer).
export type Dictionary = typeof tk;

// ─── Sözlük kartasy ──────────────────────────────────────────────────────────

const DICTIONARIES: Record<Lang, Dictionary> = { tk, ru, en };

// ─── Store interface ──────────────────────────────────────────────────────────

interface LangState {
  /** Häzirki dil kody */
  lang: Lang;
  /** Häzirki dile degişli sözlük obýekti */
  dict: Dictionary;
  /** Dili üýtgetmek — dict awtomatik täzelenýär */
  setLang: (lang: Lang) => void;
}

// ─── Store ───────────────────────────────────────────────────────────────────

export const useLangStore = create<LangState>()(
  persist(
    (set) => ({
      lang: "tk",
      dict: DICTIONARIES["tk"],

      setLang: (lang) =>
        set({
          lang,
          dict: DICTIONARIES[lang],
        }),
    }),
    {
      name: "sumbar-lang",                        // localStorage açary
      storage: createJSONStorage(() => localStorage),
      // Diňe `lang` saklansyn — `dict` her gezek lang-dan alynýar
      partialize: (state) => ({ lang: state.lang }),
      // Sahypa açylanda saklanan lang-y ýükle, dict-i täzele
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.dict = DICTIONARIES[state.lang];
        }
      },
    }
  )
);

// ─── Kömekçi hook: diňe dict gerekli komponentler üçin ───────────────────────

export function useDict(): Dictionary {
  return useLangStore((s) => s.dict);
}