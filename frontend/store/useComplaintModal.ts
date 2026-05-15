import { create } from 'zustand';

interface ComplaintModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useComplaintModal = create<ComplaintModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
