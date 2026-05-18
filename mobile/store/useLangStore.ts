// mobile/store/useLanguageStore.ts
import { create } from 'zustand';

// Döreden JSON faýllaryňy import et (faýllaryň ýoluny özüňe görä barla)
import tk from '../dictionaries/tk.json';
import ru from '../dictionaries/ru.json';
import en from '../dictionaries/en.json';

// Dilleriň obýektini döredýäris
const dictionaries = { tk, ru, en };

interface LangState {
  lang: 'tk' | 'ru' | 'en';
  t: typeof tk; // Komponentlerde kody ýazaňda kömekçi (autocomplete) çykar ýaly
  setLang: (newLang: 'tk' | 'ru' | 'en') => void;
}

export const useLangStore = create<LangState>((set) => ({
  lang: 'tk', 
  t: tk, // Başlangyç terjime hem Türkmençe bolýar
  setLang: (newLang) => set({ 
    lang: newLang, 
    t: dictionaries[newLang] // Dil üýtgände sözler hem awtomat üýtgeýär
  }),
}));
