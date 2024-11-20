import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  offlineAccess: true,
  webClientId:
    "656997842042-80824k0o9juvdj3vc954i5ca9vu5si1m.apps.googleusercontent.com",
  iosClientId:
    "656997842042-fhr9p374o28c9lisdphs1jkcdiaae3p4.apps.googleusercontent.com",
  scopes: ["profile", "email"],
});

const GoogleAuth = () => {
  const testGoogleLoginFunctionality = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      // log in using Google account (on Android it will only work if google play services are installed)
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);

      // try to sign in silently (this should be done when the user is already signed-in)
      /*
        const userInfo2 = await GoogleSignin.signInSilently();
        console.log(userInfo2);
      */

      // to logout use the following piece of code
      /*
      const resp = await GoogleSignin.signOut();
      console.log(resp);
      */
    } catch (error: any) {
      if (error.code) {
        console.log("Error related to Google sign-in: ", error);
      } else {
        console.log("An error that is not related to Google sign-in: ", error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoogleSigninButton onPress={() => testGoogleLoginFunctionality()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GoogleAuth;