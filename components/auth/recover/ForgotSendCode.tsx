import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  recoveryCode: string;
  setRecoveryCode: (value: string) => void;
  handleSubmitCode: () => void;
}

export const ForgotSendCode = ({
  recoveryCode,
  setRecoveryCode,
  handleSubmitCode,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Introduce el código de recuperación</Text>
      <TextInput
        value={recoveryCode}
        accessibilityLabel="Código de recuperación"
        style={styles.inputNum}
        placeholder="Código"
        placeholderTextColor="rgba(0,0,0,0.5)"
        keyboardType="numeric"
        maxLength={8}
        textAlign="center"
        onChangeText={setRecoveryCode}
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmitCode}
        accessibilityLabel="Siguiente"
      >
        <Text style={styles.submitButtonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  inputNum: {
    width: 120,
    height: 48,
    borderWidth: 1,
    borderColor: "#CDCDCD",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
    color: "#333",
  },
  submitButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
