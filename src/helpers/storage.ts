import { StateStorage } from "zustand/middleware";
import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";

export const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return setItemAsync(name, JSON.stringify(value));
  },
  getItem: async (name) => {
    const value = await getItemAsync(name);
    return value ? JSON.parse(value) : null;
  },
  removeItem: (name) => {
    return deleteItemAsync(name);
  },
};
