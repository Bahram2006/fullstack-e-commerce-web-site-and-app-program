import { create } from 'zustand';

interface LangState {
  lang: 'tk' | 'ru' | 'en';
  setLang: (newLang: 'tk' | 'ru' | 'en') => void;
}

export const useLangStore = create<LangState>((set) => ({
  lang: 'tk', // Esasy başlangyç dili Türkmençe
  setLang: (newLang) => set({ lang: newLang }),
}));
