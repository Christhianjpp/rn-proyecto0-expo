import IconName from "components/IconName";
import Screen from "components/Screen";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useAuthStore } from "stores/authStore";
import { profileStyles } from "theme/profileTheme";
import { useRouter } from "expo-router";

export const MyUser = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.viewIcon}>
        <Pressable onPress={() => router.push("edit-profile")}>
          <IconName name="pencil" color="grey" size={20} />
        </Pressable>
      </View>
      <View style={profileStyles.profileContainer}>
        {user?.img ? (
          <Image
            source={{ uri: user.img }}
            style={profileStyles.profileImage}
          />
        ) : (
          <Image
            source={require("../../assets/user.png")}
            style={profileStyles.profileImage}
          />
        )}

        <View style={profileStyles.viewText}>
          <Text style={profileStyles.textName}>{user?.name}</Text>
          <Text style={profileStyles.email}>{user?.email}</Text>
        </View>
      </View>
    </View>
  );
};
