import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import tk from "@/dictionaries/tk.json";
import ru from "@/dictionaries/ru.json";
import en from "@/dictionaries/en.json";

export type Lang = "tk" | "ru" | "en";

export type Dictionary = typeof tk;

const DICTIONARIES: Record<Lang, Dictionary> = { tk, ru, en };

interface LangState {
  lang: Lang;
  dict: Dictionary;
  setLang: (lang: Lang) => void;
}

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
      name: "sumbar-lang",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ lang: state.lang }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.dict = DICTIONARIES[state.lang];
        }
      },
    },
  ),
);

export function useDict(): Dictionary {
  return useLangStore((s) => s.dict);
}
