import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useForm } from "hooks/useForm";
import { useRouter } from "expo-router";
import { stylesForm } from "theme/authTheme";
import { useAuthStore } from "stores/authStore";
import { useErrorAlert } from "hooks/useErrorAlert";

export default function FormLogin() {
  const [hidePassword, setHidePassword] = useState(true);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const router = useRouter();
  const singIn = useAuthStore((state) => state.singIn);
  const isLoading = useAuthStore((state) => state.isLoading);
  // const msgError = useAuthStore((state) => state.msgError);
  // const setMsgError = useAuthStore((state) => state.setMsgError);

  const { email, password, onChange } = useForm({
    email: "christhianjpp@gmail.com",
    password: "123456",
  });

  const handleLogin = () => {
    if (!isValidate()) return;
    try {
      singIn(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const isValidate = () => {
    const newErrors = { email: "", password: "" };

    // Validar correo
    if (!email) {
      newErrors.email = "El correo es requerido";
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      newErrors.email = "El correo no es válido";
    }

    // Validar contraseña
    if (!password) {
      newErrors.password = "La contraseña es requerida";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    setErrors(newErrors);

    // Devuelve `true` solo si no hay errores
    return !Object.values(newErrors).some((error) => error);
  };
  // useEffect(() => {
  //   if (msgError) {
  //     setMsgError("");
  //     Alert.alert("Error", msgError, [{ text: "OK" }]);
  //   }
  // }, [msgError]);

  return (
    <SafeAreaView style={stylesForm.container}>
      <View style={stylesForm.header}>
        <TouchableOpacity
          style={stylesForm.backButton}
          onPress={() => router.push("/sign-in")}
        >
          <Ionicons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <Text style={stylesForm.title}>Iniciar sesión</Text>
        <Text></Text>
      </View>

      <View style={stylesForm.form}>
        <TextInput
          style={stylesForm.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#666"
          autoCapitalize="none"
          value={email}
          onChangeText={(value) => onChange(value, "email")}
          keyboardType="email-address"
        />
        {errors.email ? (
          <Text style={stylesForm.errorText}>{errors.email}</Text>
        ) : null}

        <View style={stylesForm.passwordContainer}>
          <TextInput
            style={stylesForm.passwordInput}
            placeholder="Contraseña"
            placeholderTextColor="#666"
            secureTextEntry={hidePassword}
            value={password}
            onChangeText={(value) => onChange(value, "password")}
          />
          <TouchableOpacity
            onPress={() => setHidePassword(!hidePassword)}
            style={stylesForm.eyeIcon}
          >
            <Ionicons
              name={hidePassword ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="#666"
            />
          </TouchableOpacity>
        </View>
        {errors.password ? (
          <Text style={stylesForm.errorText}>{errors.password}</Text>
        ) : null}

        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => router.push("/recover-password")}
        >
          <Text style={stylesForm.forgotPassword}>
            Olvidé la contraseña o no puedo iniciar sesión
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesForm.loginButton} onPress={handleLogin}>
          {isLoading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={stylesForm.loginButtonText}>Iniciar sesión</Text>
          )}
        </TouchableOpacity>

        <View style={stylesForm.registerContainer}>
          <Text style={stylesForm.registerText}>¿No tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => router.push("/registers")}>
            <Text style={stylesForm.registerLink}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
