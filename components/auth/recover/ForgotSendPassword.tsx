import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  password: string;
  setPassword: (value: string) => void;
  msgPassword: string;
  onChange: () => void;
}

export const ForgotSendPassword = ({
  password,
  setPassword,
  msgPassword,
  onChange,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nueva contraseña</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Introduce tu nueva contraseña"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          accessibilityLabel="Contraseña"
          onSubmitEditing={onChange}
        />
        <TouchableOpacity
          onPress={() => setShowPassword((prev) => !prev)}
          style={styles.eyeButton}
          accessibilityLabel={
            showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
          }
        >
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="#888"
          />
        </TouchableOpacity>
      </View>
      {msgPassword && <Text style={styles.errorText}>{msgPassword}</Text>}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onChange}
          style={styles.button}
          accessibilityLabel="Enviar"
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    padding: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#555",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  eyeButton: {
    marginLeft: 10,
  },
  errorText: {
    marginTop: 5,
    color: "#d9534f",
    fontSize: 14,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#007bff",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
