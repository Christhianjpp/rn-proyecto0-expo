import IconName from "components/IconName";
import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, Modal } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { DataStyles } from "theme/profileTheme";

const ButtonCardView = ({
  title,
  data,
  nameIcon,
}: {
  title: string;
  data: any;
  nameIcon: React.ComponentProps<typeof SimpleLineIcons>["name"];
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.card}>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={styles.header}>
          <IconName name={nameIcon} size={20} color="#4A4A4A" />
          <IconName name="arrow-right" size={16} color="#4A4A4A" />
        </View>

        {/* Información Principal */}
        <Text style={styles.data}>{data}</Text>
        <Text style={styles.title}>{title}</Text>
      </Pressable>

      <Modal
        //   animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={DataStyles.centeredView}>
          <View style={DataStyles.modalView}>
            <Text style={DataStyles.modalText}>Hello World!</Text>
            <Pressable
              style={[DataStyles.button, DataStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={DataStyles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ButtonCardView;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 15,
    backgroundColor: "#F0F4F8", // Fondo blanco para destacar
    borderRadius: 10, // Bordes redondeados
    // shadowColor: "#000", // Sombra para elevar
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 4 },
    // shadowRadius: 6,
    // elevation: 3, // Sombra para Android
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  data: {
    fontSize: 16, // Tamaño destacado para los datos
    fontWeight: "500",
    color: "#333333", // Color fuerte para contraste
    marginBottom: 6,
  },
  title: {
    fontSize: 14, // Tamaño más pequeño para el título
    fontWeight: "400",
    color: "#777777", // Color más tenue para menor énfasis
  },
});
