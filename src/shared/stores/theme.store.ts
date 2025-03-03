// import { create } from 'zustand';

// interface ThemeState {
// 	isLight: boolean;
// 	toggleTheme: (isLight: boolean) => void;
// }

// export const useThemeStore = create<ThemeState>((set) => ({
// 	isLight: false,
// 	toggleTheme: (isLight) => set({ isLight }),
// }));

import { create } from 'zustand';

interface ThemeState {
  isLight: boolean;
  toggleTheme: (isLight: boolean) => void;
  setIsLight: (isLight: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isLight: false,
  toggleTheme: (isLight) => set({ isLight }),
  setIsLight: (isLight) => set({ isLight }),
}));
