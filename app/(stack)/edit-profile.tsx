import { useNavigation } from "expo-router";
import React, { useEffect, useLayoutEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import EditProfileScreen from "screen/EditProfileScreen";

const editProfile = () => {
  const navigation = useNavigation();

  //   useLayoutEffect(() => {
  //     navigation.setOptions({ headerShown: true });
  //   }, [navigation]);
  useEffect(() => {
    navigation.setOptions({
      // headerTitle: "Editar Perfil",
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()} // Navegar a la pantalla anterior
          style={{
            // flexDirection: "row",
            // alignItems: "center",
            // marginLeft: 1,
            paddingRight: 20,
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          {/* <Text style={{ marginLeft: 5, fontSize: 16, color: "black" }}>
            Volver
          </Text> */}
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return <EditProfileScreen />;
};

export default editProfile;
