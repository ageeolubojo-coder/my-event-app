
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useTokenStore = create(
  persist(
    (set, get) => ({
      token: null,
      user: null,

      isAuthenticated: () => !!get().token,

      setToken: (token) => set({ token }),

      setUser: (user) => set({ user }),

      reset: () => set({ token: null, user: null }),
    }),
    {
      name: "ao:event:auth:token",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
