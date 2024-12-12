import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useImagePicker } from "components/edit/ImageUpload";

type IoniconName = keyof typeof Ionicons.glyphMap;
import { ImagePickerAsset } from "expo-image-picker";

interface imgNew {
  uri: string;
  type: string;
}

interface MenuModalProps {
  visible: boolean;
  onClose: () => void;
  setImgUser: (img: ImagePickerAsset) => void;
}

interface OptionItemProps {
  iconName: IoniconName;
  label: string;
  onPress: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({
  visible,
  onClose,
  setImgUser,
}) => {
  const { takePhoto, pickImageFromGallery, clearImage, image } =
    useImagePicker();

  const handleOptionPress = (label: string) => {
    if (label === "Cámara") {
      takePhoto();
    } else if (label === "Galería") {
      pickImageFromGallery();
    } else if (label === "Avatar") {
    }
    onClose();
  };
  useEffect(() => {
    if (image) {
      setImgUser(image);
    }
  }, [image]);

  const OptionItem: React.FC<OptionItemProps> = ({
    iconName,
    label,
    onPress,
  }) => (
    <TouchableOpacity key={label} style={styles.option} onPress={onPress}>
      <Ionicons name={iconName} size={30} color="black" />
      <Text style={styles.optionText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <View style={styles.top}>
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Ionicons name="close-sharp" size={25} color="gray" />
              </TouchableOpacity>
              <Text style={styles.title}>Foto del perfil</Text>
              <View style={{ width: 25 }} />
            </View>
            <View style={styles.options}>
              <OptionItem
                iconName="camera-outline"
                label="Cámara"
                onPress={() => handleOptionPress("Cámara")}
              />
              <OptionItem
                iconName="image-outline"
                label="Galería"
                onPress={() => handleOptionPress("Galería")}
              />
              {/* <OptionItem
                iconName="person-outline"
                label="Avatar"
                onPress={() => handleOptionPress("Avatar")}
              /> */}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
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
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    width: "80%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  top: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
    flex: 1,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  option: {
    alignItems: "center",
  },
  optionText: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
  closeButton: {},
});
