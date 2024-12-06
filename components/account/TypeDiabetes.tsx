import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { DataStyles } from "theme/profileTheme";

function TypeDiabetes() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Pressable
        style={DataStyles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={DataStyles.edadStyle}>Tipo 1</Text>
        <Text style={DataStyles.textStyle}>Diabetes</Text>
      </Pressable>
      <Modal
        //   animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
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
}

export default TypeDiabetes;
