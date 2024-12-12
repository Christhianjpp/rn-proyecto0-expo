import { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

type UseImagePickerResult = {
  image: any | null;
  takePhoto: () => Promise<void>;
  pickImageFromGallery: () => Promise<void>;
  clearImage: () => void;
};

export const useImagePicker = (): UseImagePickerResult => {
  const [image, setImage] = useState<any | null>(null);

  // Solicitar permisos de la cámara
  const requestCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permiso requerido",
        "Se necesita acceso a la cámara para tomar fotos."
      );
      return false;
    }
    return true;
  };

  // Solicitar permisos de la galería
  const requestGalleryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permiso requerido",
        "Se necesita acceso a la galería para seleccionar imágenes."
      );
      return false;
    }
    return true;
  };

  // Abrir la cámara para tomar una foto
  const takePhoto = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      mediaTypes: ["images"],
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      let imgforUpload = {
        uri: result.assets[0].uri,
        type: `test/${result.assets[0].uri.split(".")[1]}`,
        name: `test.${result.assets[0].uri.split(".")[1]}`,
      };
      setImage(imgforUpload);

      // setImage(result.assets[0].uri);
    }
  };

  // Abrir la galería para seleccionar una imagen
  const pickImageFromGallery = async () => {
    const hasPermission = await requestGalleryPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: ["images"],
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      let imgforUpload = {
        uri: result.assets[0].uri,
        type: `test/${result.assets[0].uri.split(".")[1]}`,
        name: `test.${result.assets[0].uri.split(".")[1]}`,
      };
      setImage(imgforUpload);
      // uploadImageCloudinaryUser({ imgforUpload, opendFrom: "User" });
    }
  };

  // Limpiar la imagen seleccionada
  const clearImage = () => {
    setImage(null);
    Alert.alert("Imagen borrada", "La imagen seleccionada ha sido eliminada.");
  };

  return { image, takePhoto, pickImageFromGallery, clearImage };
};
