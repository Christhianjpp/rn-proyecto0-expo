import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";

const ButtonEmail = ({ route }: { route: string }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable style={styles.googleButton} onPress={() => router.push(route)}>
        <MaterialCommunityIcons
          name="email-outline"
          size={24}
          color="gray"
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Correo electrónico</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "center",
  },
  googleButton: {
    flexDirection: "row", // Ícono a la izquierda y texto a la derecha
    alignItems: "center", // Centra verticalmente
    backgroundColor: "#F0F4F8",
    borderRadius: 20,
    paddingVertical: 12, // Espaciado vertical interno
    paddingHorizontal: 16, // Espaciado horizontal interno
    width: "90%", // Botón ocupa el 90% del ancho del contenedor
    justifyContent: "center", // Centra horizontalmente el contenido
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  icon: {
    position: "absolute", // Coloca el ícono siempre a la izquierda
    left: 16, // Espaciado desde el borde izquierdo del botón
    opacity: 0.7,
  },
  buttonText: {
    opacity: 0.8,
    color: "gray",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center", // Asegura que el texto esté centrado
    flex: 1, // Hace que el texto ocupe el espacio necesario para centrarse
  },
});

export default ButtonEmail;
