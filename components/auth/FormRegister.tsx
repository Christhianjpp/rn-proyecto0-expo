import React, { useState } from "react";
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
import { useRouter } from "expo-router";
import { useForm } from "hooks/useForm";
import ShowPrivacyPolicies from "./ShowPrivacyPolicies";
import { stylesForm } from "theme/authTheme";
import proyectoApi from "api/proyectoApi";
import { useAuthStore } from "stores/authStore";
import { useErrorAlert } from "hooks/useErrorAlert";

export default function FormRegister() {
  const [hidePassword, setHidePassword] = useState(true);
  const createUser = useAuthStore((state) => state.createUser);
  const isloading = useAuthStore((state) => state.isLoading);

  const router = useRouter();
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const { name, email, password, onChange } = useForm({
    name: "christhian",
    email: "christhianjpp@gmail.com",
    password: "123456",
  });

  const handleRegister = async () => {
    if (!isValidate()) return;
    console.log(name, email, password);
    try {
      createUser({ name, email, password });
    } catch (error) {
      console.log(error);
    }
  };

  const isValidate = () => {
    const newErrors = { name: "", email: "", password: "" };
    // Reglas de validación
    const nameRegex = /^[a-zA-ZñÑ]+(?:\s[a-zA-ZñÑ]+)*$/; // Solo letras y espacios
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Correo válido
    const maxNameLength = 40; // Tamaño máximo para el nombre
    const maxEmailLength = 50; // Tamaño máximo para el correo

    // Validar nombre
    if (!name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (name.length > maxNameLength) {
      newErrors.name = `El nombre no debe superar los ${maxNameLength} caracteres`;
    } else if (!nameRegex.test(name)) {
      newErrors.name = "El nombre solo puede contener letras y espacios";
    }

    // Validar correo
    if (!email.trim()) {
      newErrors.email = "El correo es requerido";
    } else if (email.length > maxEmailLength) {
      newErrors.email = `El correo no debe superar los ${maxEmailLength} caracteres`;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Debes ingresar un correo válido";
    }

    // Validar contraseña
    if (!password.trim()) {
      newErrors.password = "La contraseña es requerida";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    } else if (password.length > 20) {
      newErrors.password = "La contraseña no debe superar los 20 caracteres";
    }

    // Actualizar errores en el estado
    setErrors(newErrors);

    // Devuelve `true` solo si no hay errores
    return Object.values(newErrors).every((error) => !error);
  };

  return (
    <SafeAreaView style={stylesForm.container}>
      <View style={stylesForm.header}>
        <TouchableOpacity
          style={stylesForm.backButton}
          onPress={() => router.push("/sign-in")}
        >
          <Ionicons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <Text style={stylesForm.title}>Registrarse</Text>
        <Text></Text>
      </View>

      <View style={stylesForm.form}>
        <TextInput
          style={stylesForm.input}
          placeholder="Nombre"
          placeholderTextColor="#666"
          autoCapitalize="words"
          value={name}
          onChangeText={(value) => onChange(value, "name")}
        />
        {errors.name ? (
          <Text style={stylesForm.errorText}>{errors.name}</Text>
        ) : null}

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

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ShowPrivacyPolicies sms="registrarse" />
        </View>

        <TouchableOpacity
          style={stylesForm.loginButton}
          onPress={handleRegister}
        >
          {isloading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={stylesForm.loginButtonText}>Registrarse</Text>
          )}
        </TouchableOpacity>

        <View style={stylesForm.registerContainer}>
          <Text style={stylesForm.registerText}>¿Ya tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => router.push("/logins")}>
            <Text style={stylesForm.registerLink}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
