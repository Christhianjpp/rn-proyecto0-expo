import { useEffect } from "react";
import { Alert } from "react-native";
import { useAuthStore } from "stores/authStore";

export const useErrorAlert = () => {
  const msgError = useAuthStore((state) => state.msgError);
  const setMsgError = useAuthStore((state) => state.setMsgError);

  useEffect(() => {
    if (msgError) {
      Alert.alert("Error", msgError, [{ text: "OK" }]);
      setMsgError(""); // Limpia el mensaje después de mostrar la alerta
    }
  }, [msgError, setMsgError]);
};
