import React, { useRef } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";

interface Props {
  email: string;
  setEmail: (value: string) => void;
  handleSubmitEmail: () => void;
  msgEmail: string;
}

export const ForgotSendEmail = ({
  email,
  setEmail,
  handleSubmitEmail,
  msgEmail,
}: Props) => {
  const inputEmailRef = useRef<TextInput>(null);

  const focusEmailInput = () => {
    inputEmailRef.current?.focus();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restablecer contraseña</Text>
      <Text style={styles.description}>
        Ingresa tu correo electrónico para enviarte un código de verificación y
        confirmar tu identidad.
      </Text>

      {msgEmail && <Text style={styles.errorText}>{msgEmail}</Text>}

      <TouchableWithoutFeedback onPress={focusEmailInput}>
        <View style={styles.inputContainer}>
          <TextInput
            ref={inputEmailRef}
            style={styles.input}
            value={email}
            onChangeText={setEmail} // Actualiza el estado `email`
            placeholder="Introduce tu correo electrónico"
            placeholderTextColor="#888"
            textAlign="center"
            autoCapitalize="none"
            keyboardType="email-address"
            accessibilityLabel="Correo electrónico"
          />
          <Text style={styles.helperText}>
            Introduce tu correo electrónico para continuar
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableOpacity
        onPress={handleSubmitEmail}
        accessibilityLabel="Enviar correo de recuperación"
        style={styles.button}
      >
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 14,
    textAlign: "center",
    color: "#333",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
  inputContainer: {
    alignItems: "center",
    width: "100%",
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    marginBottom: 5,
  },
  helperText: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: "#007bff",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
