import UpdateImage from "components/edit/UpdateImage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useAuthStore } from "stores/authStore";
import { Ionicons } from "@expo/vector-icons";

const EditProfileScreen = () => {
  const user = useAuthStore((state) => state.user);
  const [imgUser, setImgUser] = useState(user?.img);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        {/* Componente para la imagen */}
        <UpdateImage imgUser={imgUser} />

        {/* Botón montado debajo de la imagen */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("menu-modal")}
        >
          <Ionicons name="camera-outline" size={25} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    padding: 20,
  },
  imageWrapper: {
    position: "relative", // Necesario para posicionar el botón relativo a la imagen
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    opacity: 0.9,
    position: "absolute",
    bottom: -10, // Ajusta para montar el botón en la parte inferior de la imagen
    right: -10, // Ajusta para alinearlo con el borde derecho
    backgroundColor: "#F0F4F8",
    padding: 8,
    borderRadius: 25, // Botón redondo
    elevation: 5, // Sombra en Android
    shadowColor: "#000", // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
