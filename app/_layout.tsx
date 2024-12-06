import { Redirect, Stack } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useAuthStore } from "../stores/authStore";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
const Layout = () => {
  const checkSession = useAuthStore((state) => state.checkSession);
  useEffect(() => {
    checkSession();
  }, []);

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaProvider>
  );
};
export default Layout;
