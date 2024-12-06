import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { useAuthStore } from "stores/authStore";
import { router } from "expo-router";
import Login from "components/auth/Login";
import Register from "components/auth/Register";
import { useErrorAlert } from "hooks/useErrorAlert";
const LoginScreen = () => {
  useErrorAlert();
  const isAuth = useAuthStore((state) => state.isAuthenticated);
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre Login y Registro

  useEffect(() => {
    // Verifica si hay una sesión activa
    if (isAuth) router.replace("/");
  }, [isAuth]);

  return (
    <View style={styles.container}>
      {isLogin ? <Login /> : <Register />}

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.switchText}>
          {isLogin
            ? "¿No tienes cuenta? Regístrate"
            : "¿Ya tienes cuenta? Inicia Sesión"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  switchText: {
    marginTop: 20,
    textAlign: "center",
    color: "#007bff",
    textDecorationLine: "underline",
    opacity: 0.6,
  },
});
export default LoginScreen;
