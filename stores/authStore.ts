import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  photo: string; // URL de la foto de perfil
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) =>
    set({
      isAuthenticated: true,
      user,
    }),
  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
    }),
}));