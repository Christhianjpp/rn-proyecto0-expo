import React from "react";
import { Text, View } from "react-native";
import Screen from "../components/Screen";
import { useAuthStore } from "../stores/authStore";
import GoogleAuth from "../components/GoogleAuth";

const HomeScreen = () => {
  const { isAuthenticated, user, login, logout } = useAuthStore();

  return (
    <Screen>
      <View>
        <Text>HomeScreen!!</Text>
        <Text>Bienvenido, {user?.name}!</Text>
      </View>
      <GoogleAuth />
    </Screen>
  );
};

export default HomeScreen;
