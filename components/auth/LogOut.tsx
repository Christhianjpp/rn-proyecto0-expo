import React from "react";
import { Pressable, Text, View } from "react-native";
import { useAuthStore } from "../../stores/authStore";
import { LogoutIcon } from "components/Icons";
import IconName from "components/IconName";

export const LogOut = () => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <View>
      <Pressable
        onPress={logout}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <IconName name="logout" size={20} color="#4A4A4A" />
        <Text
          style={{
            fontWeight: "500",
            marginLeft: 10,
            fontSize: 16,
            color: "#4A4A4A",
          }}
        >
          Cerrar sesión
        </Text>
      </Pressable>
    </View>
  );
};
