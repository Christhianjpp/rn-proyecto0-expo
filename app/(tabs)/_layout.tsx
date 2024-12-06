import { Redirect, Tabs } from "expo-router";
import { ImageBackground, View } from "react-native";
import { HomeIcon, InfoIcon, UserIcon } from "../../components/Icons";
import { useAuthStore } from "../../stores/authStore";

export default function Layout({}) {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        // tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      <Tabs.Screen
        name="yo"
        options={{
          title: "Yo",
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
