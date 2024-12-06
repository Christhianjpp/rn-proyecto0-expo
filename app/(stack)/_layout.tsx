import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="edit-profile"
        options={{
          headerShown: true,
          title: "Editar Perfil",
          // Sin tabs automáticamente porque no está en el layout de tabs
        }}
      />
      <Stack.Screen
        name="menu-modal"
        options={{
          presentation: "containedTransparentModal", // Permite un fondo completamente transparente

          headerShown: false, // Oculta el encabezado para que se vea como un menú
        }}
      />
    </Stack>
  );
}
