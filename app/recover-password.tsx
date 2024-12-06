import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { stylesForm } from "theme/authTheme";
import { Ionicons } from "@expo/vector-icons";
import { ForgotSendEmail } from "components/auth/recover/SendEmail";
import { isValidEmail, isValidPassword } from "helpers/CheckEmail";
import { useAuthStore } from "stores/authStore";
import CountdownTimer from "components/auth/CountdownTimer";
import { ForgotSendCode } from "components/auth/recover/ForgotSendCode";
import { ForgotSendPassword } from "components/auth/recover/ForgotSendPassword";
const regNumber = /^\d+$/;

const RecoverPassword = () => {
  const router = useRouter();
  const [recoveryCode, setRecoveryCode] = useState("");
  const [email, setEmail] = useState("christhianjpp@gmail.com");
  const [password, setPassword] = useState("");

  const [msgEmail, setMsgEmail] = useState("");
  const [msgPassword, setMsgPassword] = useState("");
  const [msgPasswordConfirm, setMsgPasswordConfirm] = useState("");
  const sendEmail = useAuthStore((state) => state.sendEmail);
  const statusRecovery = useAuthStore((state) => state.statusRecovery);
  const finishTimeCodeRecovery = useAuthStore(
    (state) => state.finishTimeCodeRecovery
  );
  const sendCode = useAuthStore((state) => state.sendCode);
  const sendPassword = useAuthStore((state) => state.sendPassword);
  const handleSubmitEmail = () => {
    if (!isValidEmail({ email, setMsgEmail })) return;
    console.log(email);
    sendEmail(email);
  };

  const handleSubmitCode = () => {
    if (!isValidCode()) return;
    const code = recoveryCode;
    sendCode(code);
  };

  const isValidCode = () => {
    if (recoveryCode.trim().length !== 4) {
      return false;
    }
    if (!regNumber.test(recoveryCode)) {
      return false;
    }
    return true;
  };
  const handleBackButton = () => {
    finishTimeCodeRecovery();
    router.push("/logins");
  };
  const onChange = () => {
    if (!isValidPassword({ password, setMsgPassword })) return;
    console.log(password);

    sendPassword(password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={stylesForm.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => handleBackButton()}
        >
          <Ionicons name="arrow-back" size={26} color="black" />
          {/* <Text style={stylesForm.title}>Atras</Text> */}
          <Text></Text>
        </TouchableOpacity>
      </View>
      {statusRecovery === "email" && (
        <ForgotSendEmail
          email={email}
          setEmail={setEmail}
          handleSubmitEmail={handleSubmitEmail}
          msgEmail={msgEmail}
        />
      )}

      {statusRecovery === "code" && (
        <View>
          <CountdownTimer tiempoInicial={180} />
          <ForgotSendCode
            recoveryCode={recoveryCode}
            setRecoveryCode={setRecoveryCode}
            handleSubmitCode={handleSubmitCode}
          />
        </View>
      )}

      {statusRecovery === "codeOk" && (
        <ForgotSendPassword
          msgPassword={msgPassword}
          onChange={onChange}
          password={password}
          setPassword={setPassword}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  switchText: {
    marginTop: 20,
    textAlign: "center",
    color: "#007bff",
    textDecorationLine: "underline",
    opacity: 0.6,
  },

  backButton: {
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 8,
  },
});

export default RecoverPassword;
