import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Layout = () => {
  return (
    <View style={style.container}>
      <Stack />
    </View>
  );
};
export default Layout;
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
