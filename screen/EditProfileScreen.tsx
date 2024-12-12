import UpdateImage from "components/edit/UpdateImage";

import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Button } from "react-native";
import { useAuthStore } from "stores/authStore";
import { Ionicons } from "@expo/vector-icons";
import MenuModal from "components/edit/MenuModal";
import { ImagePickerAsset } from "expo-image-picker";
import EditProfile from "components/edit/EditProfile";

interface Promp {
  nameUser: string;
  setNameUser: (name: string) => void;
  imgforUpload: ImagePickerAsset | undefined;
  setImgforUpload: (img: ImagePickerAsset) => void;
}
const EditProfileScreen = ({
  nameUser,
  setNameUser,
  imgforUpload,
  setImgforUpload,
}: Promp) => {
  const user = useAuthStore((state) => state.user);
  const [imgUser, setImgUser] = useState(user?.img);
  const [modalVisible, setModalVisible] = useState(false);
  const [namechange, setNamechange] = useState<string>();
  useEffect(() => {
    if (namechange) {
      setNameUser(namechange);
    }
  }, [namechange]);

  useEffect(() => {
    if (imgforUpload) {
      setImgUser(imgforUpload.uri);
    }
  }, [imgforUpload]);

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        {/* Componente para la imagen */}
        <UpdateImage imgUser={imgUser} />

        {/* Botón montado debajo de la imagen */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="camera-outline" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <EditProfile nameData={nameUser} setNameUser={setNamechange} />

      <MenuModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        setImgUser={setImgforUpload}
      />
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
