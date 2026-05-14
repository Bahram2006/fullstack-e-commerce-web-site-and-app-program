import { create } from "zustand";

export interface CompareProduct {
  id: string;
  name: string;
  image_url: string;
}

interface CompareStore {
  items: CompareProduct[];
  add: (product: CompareProduct) => void;
  remove: (id: string) => void;
  clear: () => void;
  isSelected: (id: string) => boolean;
}

export const useCompareStore = create<CompareStore>((set, get) => ({
  items: [],

  add: (product) => {
    const { items } = get();
    if (items.length >= 4) return; // maks 4
    if (items.find((p) => p.id === product.id)) return; // gaýtalanma
    set({ items: [...items, product] });
  },

  remove: (id) =>
    set((state) => ({
      items: state.items.filter((p: CompareProduct) => p.id !== id),
    })),

  clear: () => set({ items: [] }),

  isSelected: (id) => get().items.some((p) => p.id === id),
}));
