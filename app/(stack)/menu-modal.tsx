import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const MenuModal = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };
  type IoniconName = keyof typeof Ionicons.glyphMap;

  interface OptionItemProps {
    iconName: IoniconName;
    label: string;
  }

  const OptionItem: React.FC<OptionItemProps> = ({ iconName, label }) => (
    <TouchableOpacity style={styles.option}>
      <Ionicons name={iconName} size={30} color="black" />
      <Text style={styles.optionText}>{label}</Text>
    </TouchableOpacity>
  );
  return (
    <TouchableOpacity
      style={styles.overlay}
      activeOpacity={1}
      onPress={handleClose}
    >
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <View style={styles.dragIndicator} />
          <View style={styles.top}>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Ionicons name="close-sharp" size={25} color="gray" />
            </TouchableOpacity>
            <Text style={styles.title}>Foto del perfil</Text>
            {/* Espacio vacío para alinear el botón de cerrar y el título */}
            <View style={{ width: 25 }} />
          </View>
          <View style={styles.options}>
            <OptionItem iconName="camera-outline" label="Cámara" />
            <OptionItem iconName="image-outline" label="Galería" />
            <OptionItem iconName="person-outline" label="Avatar" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  );
};

export default MenuModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "transparent",
  },
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    height: "25%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  dragIndicator: {
    width: 40,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 2.5,
    marginBottom: 25,
  },
  top: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
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
