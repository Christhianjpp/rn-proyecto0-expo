import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import proyectoApi from "api/proyectoApi";
import { IUser, LoginResponse } from "interfaces/user";

interface User {
  id: string;
  name: string;
  email: string;
  photo: string; // URL de la foto de perfil
}
interface UserCreate {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: IUser | null;
  status: "checking" | "authenticated" | "not-authenticated";
  statusRecovery: "email" | "code" | "codeOk";
  token: string | null;
  tokenRecovery: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  checkSession: () => Promise<void>;
  createUser: (user: UserCreate) => void;
  singIn: (email: string, password: string) => void;
  sendEmail: (email: string) => void;
  finishTimeCodeRecovery: () => void;
  sendCode: (code: string) => void;
  sendPassword: (password: string) => void;
  msgError: string;
  setMsgError: (message: string) => void; // Define el setter
  updateUser: (name: string, img: string | undefined) => void;
  setLoadingTrue: () => void;
  setLoadingfalse: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  user: null,
  token: null,
  status: "checking",
  isLoading: false,
  statusRecovery: "email",
  tokenRecovery: null,
  msgError: "",
  setMsgError: (message) => set({ msgError: message }),
  setLoadingTrue: () => {
    set({ isLoading: true });
  },
  setLoadingfalse: () => {
    set({ isLoading: false });
  },
  login: async (user, token) => {
    try {
      set({ isLoading: true });
      const { data } = await proyectoApi.post("/auth/google", {
        id_token: token,
      });

      await AsyncStorage.setItem("token", data.token);

      set({ isAuthenticated: true, user: data.user, token: data.token });
    } catch (error: any) {
      console.error("Error en la autenticación con Google:", error.message);

      // Limpia el estado y AsyncStorage si ocurre un error
      await AsyncStorage.removeItem("token");
      set({ isAuthenticated: false, user: null, token: null });

      // Opcional: Propaga el error o maneja el mensaje para mostrar al usuario
      throw new Error(
        "No se pudo iniciar sesión con Google. Por favor, inténtalo de nuevo."
      );
    } finally {
      set({ isLoading: false });
    }
  },
  logout: async () => {
    await AsyncStorage.removeItem("token");
    set({ isAuthenticated: false, user: null, token: null });
  },
  checkSession: async () => {
    try {
      // Verificar si hay un token almacenado
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        console.log("No hay token, usuario no autenticado");
        set({ status: "not-authenticated", isAuthenticated: false });
        return;
      }
      // Verificar el token con el backend
      try {
        const { data } = await proyectoApi.get("/auth");

        // Actualizar el token en AsyncStorage
        await AsyncStorage.setItem("token", data.token);

        // Actualizar el estado del usuario
        set({ isAuthenticated: true, user: data.user, token: data.token });
      } catch (authError: any) {
        console.error("Error al autenticar con el backend:", authError.message);

        // Si la autenticación falla, limpiar el token almacenado
        await AsyncStorage.removeItem("token");
        set({ status: "not-authenticated", isAuthenticated: false });
      }
    } catch (error: any) {
      console.error("Error al verificar sesión:", error.message);
      set({ status: "not-authenticated", isAuthenticated: false });
    }
  },
  createUser: async (user: UserCreate) => {
    try {
      set({ isLoading: true });
      console.log("create");

      const { data } = await proyectoApi.post("/users", user);
      console.log(data);

      await AsyncStorage.setItem("token", data.token);

      set({ isAuthenticated: true, user: data.user, token: data.token });
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.errors) {
        const errorMessage =
          error.response.data.errors[0]?.msg || "Error desconocido";
        set({ msgError: errorMessage }); // Establece el mensaje en el store
      } else {
        set({ msgError: "Error desconocido al crear el usuario." });
      }
      await AsyncStorage.removeItem("token");
      set({ isAuthenticated: false, user: null, token: null });

      // Opcional: Propaga el error o maneja el mensaje para mostrar al usuario
      throw new Error(
        "No se pudo crear el usuario. Por favor, inténtalo de nuevo."
      );
    } finally {
      set({ isLoading: false });
    }
  },
  updateUser: async (name: string, img: string | undefined) => {
    try {
      set({ isLoading: true });
      const id = get().user?.uid;
      console.log({ id });

      const { data } = await proyectoApi.put(`/users/${id}`, {
        name,
        img,
      });

      set({ user: data.user });
    } catch (error: any) {
      set({ msgError: error.response.data.msg });
    } finally {
      set({ isLoading: false });
    }
  },
  singIn: async (email: string, password: string) => {
    try {
      set({ isLoading: true });
      const { data } = await proyectoApi.post("/auth/login", {
        email,
        password,
      });
      console.log(data);

      await AsyncStorage.setItem("token", data.token);

      set({ isAuthenticated: true, user: data.user, token: data.token });
    } catch (error: any) {
      set({ msgError: error.response.data.msg });
      // Limpia el estado y AsyncStorage si ocurre un error
      await AsyncStorage.removeItem("token");
      set({ isAuthenticated: false, user: null, token: null });

      // Opcional: Propaga el error o maneja el mensaje para mostrar al usuario
      throw new Error(
        "No se pudo iniciar sesión. Por favor, verifica tus credenciales."
      );
    } finally {
      set({ isLoading: false });
    }
  },
  sendEmail: async (email: string) => {
    try {
      const resp = await proyectoApi.post(`/auth/forgot-password`, { email });

      if (resp.status === 200) {
        set({ tokenRecovery: resp.data, statusRecovery: "code" });

        console.log(resp.data);
      }
    } catch (error: any) {
      set({ msgError: error.response.data.msg });
    }
  },
  finishTimeCodeRecovery: () => {
    set({ statusRecovery: "email", tokenRecovery: null });
  },
  sendCode: async (code: string) => {
    try {
      const resp = await proyectoApi.post(
        `/auth/verify-code`,
        { code },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-token": get().tokenRecovery,
          },
        }
      );
      if (resp.status === 200) {
        set({ statusRecovery: "codeOk" });
        return;
      }
    } catch (error) {
      console.log(error);
    }
  },
  sendPassword: async (password: string) => {
    console.log({ password });
    try {
      const resp = await proyectoApi.put<LoginResponse>(
        "/auth/new-password-forgot",
        { password },
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-token": get().tokenRecovery,
          },
        }
      );
      if (resp.status === 200) {
        set({
          statusRecovery: "email",
          tokenRecovery: null,
          status: "authenticated",
          isAuthenticated: true,
          user: resp.data.user,
          token: resp.data.token,
        });
        await AsyncStorage.setItem("token", resp.data.token);
      }
    } catch (error) {
      console.log(error);
    }
  },
}));
