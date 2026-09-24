import { create } from "zustand";

interface UiState {
  filtersSheetOpen: boolean;
  setFiltersSheetOpen: (open: boolean) => void;
  activeGalleryIndex: number;
  setActiveGalleryIndex: (index: number) => void;
}

export const useUiStore = create<UiState>((set) => ({
  filtersSheetOpen: false,
  setFiltersSheetOpen: (open) => set({ filtersSheetOpen: open }),
  activeGalleryIndex: 0,
  setActiveGalleryIndex: (index) => set({ activeGalleryIndex: index }),
}));
