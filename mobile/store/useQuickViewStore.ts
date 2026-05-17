import { create } from 'zustand';

interface QuickViewProduct {
  id: string;
  name: string;
  image_url: string | null;
}

interface QuickViewState {
  selectedProduct: QuickViewProduct | null;
  isModalOpen: boolean;
  openQuickView: (product: QuickViewProduct) => void;
  closeQuickView: () => void;
}

export const useQuickViewStore = create<QuickViewState>((set) => ({
  selectedProduct: null,
  isModalOpen: false,

  openQuickView: (product) => set({ selectedProduct: product, isModalOpen: true }),
  closeQuickView: () => set({ selectedProduct: null, isModalOpen: false }),
}));
