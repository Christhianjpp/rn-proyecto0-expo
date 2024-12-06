import { Link, Slot, Stack, useRouter } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerLeft: (props) => (
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={26} color="black" />
          </TouchableOpacity>
        ),
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen
        name="condiciones"
        options={{
          title: "Condiciones de uso",
        }}
      />
      <Stack.Screen
        name="privacidad"
        options={{
          title: "Privacidad y Políticas de cookies",
        }}
      />
    </Stack>
  );
}
