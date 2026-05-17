import { create } from 'zustand';

interface CompareProduct {
  id: string;
  name: string;
  image_url: string | null;
}

interface CompareState {
  compareItems: CompareProduct[];
  isCompareBarOpen: boolean;
  toggleCompare: (product: CompareProduct) => void;
  clearCompare: () => void;
  setCompareBarOpen: (isOpen: boolean) => void;
}

export const useCompareStore = create<CompareState>((set) => ({
  compareItems: [],
  isCompareBarOpen: false,

  toggleCompare: (product) => set((state) => {
    const exists = state.compareItems.some((item) => item.id === product.id);
    
    if (exists) {
      // Bar bolsa sanawdan aýyrýar
      const updated = state.compareItems.filter((item) => item.id !== product.id);
      return { 
        compareItems: updated,
        isCompareBarOpen: updated.length > 0 // Sanaw boşasa paneli awtomatiki ýapýar
      };
    } else {
      // Iň köp 4 sany haryt goşup bolýar (Senior Limit rule)
      if (state.compareItems.length >= 4) {
        alert("Siz diňe 4 sany haryt goşup bilýäniňiz.");
        return state;
      }
      // Sanawa täze haryt goşýar we aşaky paneli açýar
      const updated = [...state.compareItems, product];
      return { compareItems: updated, isCompareBarOpen: true };
    }
  }),

  clearCompare: () => set({ compareItems: [], isCompareBarOpen: false }),
  setCompareBarOpen: (isOpen) => set({ isCompareBarOpen: isOpen }),
}));
