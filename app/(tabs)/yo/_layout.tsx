import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerBackButtonMenuEnabled: false, // Oculta el texto del botón "Atrás"
      }}
    >
      <Stack.Screen name="index" options={{ title: "" }} />
      {/* <Stack.Screen
        name="edit-profile"
        options={{
          title: "Editar Perfil",
          headerShown: true, // Mostrar encabezado
        }}
      /> */}
    </Stack>
  );
}
