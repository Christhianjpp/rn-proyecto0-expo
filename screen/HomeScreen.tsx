import { Text, View } from "react-native";
import { useAuthStore } from "../stores/authStore";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { isAuthenticated, user, login, logout, token } = useAuthStore();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
      }}
    >
      <Text>Bienvenido!!</Text>
    </View>
  );
};

export default HomeScreen;
