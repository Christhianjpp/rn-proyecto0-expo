import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const UpdateImage = ({ imgUser }: { imgUser?: string }) => {
  return (
    <View>
      {imgUser ? (
        <Image source={{ uri: imgUser }} style={styles.profileImage} />
      ) : (
        <Image
          source={require("../../assets/user.png")}
          style={styles.profileImage}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 75,
    alignSelf: "center",
    marginTop: 10,
  },
});

export default UpdateImage;
