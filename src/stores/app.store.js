import { create } from "zustand";
import { persist } from "zustand/middleware";
import { zustandStorage } from "../helpers/storage";

export const useAppStore = create(
  persist(
    (set) => ({
      darkMode: true,
      setDarkMode: (darkMode) => set({ darkMode }),
    }),
    {
      name: "app",
      storage: zustandStorage,
    }
  )
);
