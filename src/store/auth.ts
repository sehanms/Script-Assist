import create from 'zustand';

export const useAuthStore = create((set) => ({
  isAuthenticated: false, // Always false on page reload
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));
