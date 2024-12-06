import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import GoogleAuth from "components/GoogleAuth";
import ButtonEmail from "components/account/ButtonEmail";
import Welcome from "components/account/Welcome";
import { styles } from "theme/authTheme";
import ShowPrivacyPolicies from "./ShowPrivacyPolicies";

const Register = () => {
  return (
    <View style={{ ...styles.container }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Welcome />
        <Text style={styles.subtitle}>Registrarse con</Text>
        <GoogleAuth />
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>o</Text>
          <View style={styles.divider} />
        </View>
        <ButtonEmail route="registers" />

        <ShowPrivacyPolicies sms="registrarse" />
      </View>

      {/* <TouchableOpacity>
        <Text style={styles.registerText}>
          ¿No tiene una cuenta? <Text style={styles.linkText}>Registrarse</Text>
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Register;
