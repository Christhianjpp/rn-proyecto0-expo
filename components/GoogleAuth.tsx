import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { useAuthStore } from "../stores/authStore";
import IconName from "components/IconName";

GoogleSignin.configure({
  offlineAccess: true,
  webClientId:
    "656997842042-80824k0o9juvdj3vc954i5ca9vu5si1m.apps.googleusercontent.com",
  iosClientId:
    "656997842042-fhr9p374o28c9lisdphs1jkcdiaae3p4.apps.googleusercontent.com",
  scopes: ["profile", "email"],
});

const GoogleAuth = () => {
  const login = useAuthStore((state) => state.login); // Extrae la función login del store
  const isLoading = useAuthStore((state) => state.isLoading); // Extrae el estado de carga del store
  const testGoogleLoginFunctionality = async () => {
    try {
      useAuthStore.setState({ isLoading: true });
      await GoogleSignin.hasPlayServices();

      // log in using Google account (on Android it will only work if google play services are installed)
      const userInfo = await GoogleSignin.signIn();
      if (userInfo.data) {
        const user = {
          id: userInfo.data.user.id,
          name: userInfo.data.user.name || "Usuario",
          email: userInfo.data.user.email || "",
          photo: userInfo.data.user.photo || "",
        };
        const token = userInfo.data.idToken || "";
        login(user, token);
        return;
      }
      useAuthStore.setState({ isLoading: false });
    } catch (error: any) {
      useAuthStore.setState({ isLoading: false });
      if (error.code) {
        console.log("Error related to Google sign-in: ", error);
      } else {
        console.log("An error that is not related to Google sign-in: ", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* <GoogleSigninButton onPress={() => testGoogleLoginFunctionality()} /> */}

      <Pressable
        style={styles.googleButton}
        onPress={() => testGoogleLoginFunctionality()}
      >
        {isLoading ? (
          <View style={{ flex: 1 }}>
            <IconName
              name="social-google"
              style={styles.icon}
              size={24}
              color="white"
            />
            <ActivityIndicator size="small" color="white" />
          </View>
        ) : (
          <>
            <IconName
              name="social-google"
              style={styles.icon}
              size={24}
              color="white"
            />
            <Text style={styles.buttonText}>Google</Text>
          </>
        )}
      </Pressable>
    </View>
    // <View style={styles.container}>
    //   {/* <GoogleSigninButton onPress={() => testGoogleLoginFunctionality()} /> */}
    //   {isLoading ? (
    //     <ActivityIndicator size="large" color="#4285F4" />
    //   ) : (
    //     <Pressable
    //       style={styles.googleButton}
    //       onPress={() => testGoogleLoginFunctionality()}
    //     >
    //       <IconName
    //         name="social-google"
    //         style={styles.icon}
    //         size={24}
    //         color="white"
    //       />
    //       <Text style={styles.buttonText}>Google</Text>
    //     </Pressable>
    //   )}
    // </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  googleButton: {
    flexDirection: "row", // Ícono a la izquierda y texto a la derecha
    alignItems: "center", // Centra verticalmente
    backgroundColor: "#4285F4",
    borderRadius: 20,
    paddingVertical: 12, // Espaciado vertical interno
    paddingHorizontal: 16, // Espaciado horizontal interno
    width: "90%", // Botón ocupa el 90% del ancho del contenedor
    justifyContent: "center", // Centra horizontalmente el contenido

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    position: "absolute", // Coloca el ícono siempre a la izquierda
    left: 16, // Espaciado desde el borde izquierdo del botón
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center", // Asegura que el texto esté centrado
    flex: 1, // Hace que el texto ocupe el espacio necesario para centrarse
  },
});

export default GoogleAuth;
