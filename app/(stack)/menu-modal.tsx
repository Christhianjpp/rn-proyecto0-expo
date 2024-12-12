import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useImagePicker } from "components/edit/ImageUpload";

const MenuModal = () => {
  const { image, takePhoto, pickImageFromGallery, clearImage } =
    useImagePicker();
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const handleOptionPress = async (option: string) => {
    if (option === "Cámara") {
      await takePhoto();
    } else if (option === "Galería") {
      await pickImageFromGallery();
    } else if (option === "Avatar") {
      // Podrías poner un avatar por defecto o limpiar la imagen
      clearImage();
    }
    handleClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Botón de cerrar */}
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Ionicons name="close-sharp" size={25} color="gray" />
          </TouchableOpacity>

          {/* Título */}
          <Text style={styles.title}>Foto del perfil</Text>

          {/* Mostrar imagen seleccionada si existe */}
          {image && (
            <View style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
              <TouchableOpacity style={styles.clearButton} onPress={clearImage}>
                <Ionicons name="trash-outline" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          )}

          {/* Opciones: Cámara, Galería y Avatar */}
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.option}
              onPress={() => handleOptionPress("Cámara")}
            >
              <Ionicons name="camera-outline" size={30} color="black" />
              <Text style={styles.optionText}>Cámara</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.option}
              onPress={() => handleOptionPress("Galería")}
            >
              <Ionicons name="image-outline" size={30} color="black" />
              <Text style={styles.optionText}>Galería</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.option}
              onPress={() => handleOptionPress("Avatar")}
            >
              <Ionicons name="person-outline" size={30} color="black" />
              <Text style={styles.optionText}>Avatar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MenuModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  imageContainer: {
    position: "relative",
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  clearButton: {
    position: "absolute",
    bottom: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 15,
    padding: 5,
  },
  optionsContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  option: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  optionText: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
});
