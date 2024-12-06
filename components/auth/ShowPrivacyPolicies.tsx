import { router } from "expo-router";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { styles as themeStyles } from "theme/authTheme";

const ShowPrivacyPolicies = ({ sms }: { sms: string }) => {
  return (
    <View style={styles.container}>
      <Text style={[themeStyles.termsText, styles.centeredText]}>
        Al {sms}, acepta nuestras{" "}
        <Text
          style={themeStyles.linkText}
          onPress={() => router.navigate("terms/condiciones")}
        >
          Condiciones de uso
        </Text>
        , así como nuestras{" "}
        <Text
          style={themeStyles.linkText}
          onPress={() => router.navigate("terms/privacidad")}
        >
          Privacidad y Políticas de cookies
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredText: {
    textAlign: "center", // Centra el texto dentro del contenedor
  },
});

export default ShowPrivacyPolicies;
