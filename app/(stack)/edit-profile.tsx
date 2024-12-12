import { useNavigation } from "expo-router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import EditProfileScreen from "screen/EditProfileScreen";
import { useAuthStore } from "stores/authStore";
import { ImagePickerAsset } from "expo-image-picker";
import { uploadImageCloudinaryUser } from "helpers/uploadImageCloudinary";
const opendFrom = "UserP";

const editProfile = () => {
  const user = useAuthStore((state) => state.user);
  const updateUser = useAuthStore((state) => state.updateUser);
  const [nameUser, setNameUser] = useState(user?.name || "");
  const [imgforUpload, setImgforUpload] = useState<ImagePickerAsset>();
  const isLoading = useAuthStore((state) => state.isLoading);

  const setLoadingTrue = useAuthStore((state) => state.setLoadingTrue);
  const navigation = useNavigation();

  const handleSave = async () => {
    if (!nameUser) return;
    setLoadingTrue();
    const img = imgforUpload
      ? await uploadImageCloudinaryUser({ imgforUpload, opendFrom })
      : user?.img;

    updateUser(nameUser, img);
  };
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          disabled={isLoading}
          onPress={() => navigation.goBack()}
          style={{ paddingRight: 20, opacity: isLoading ? 0.5 : 1 }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={handleSave}
          disabled={isLoading}
          style={{ opacity: isLoading ? 0.5 : 1 }}
        >
          <Ionicons name="checkmark-sharp" size={28} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, handleSave, nameUser, imgforUpload]);

  return (
    <>
      <View style={{ height: 20, backgroundColor: "white" }}>
        {isLoading ? <ActivityIndicator size="small" color="#gray" /> : null}
      </View>

      <EditProfileScreen
        nameUser={nameUser}
        setNameUser={setNameUser}
        imgforUpload={imgforUpload}
        setImgforUpload={setImgforUpload}
      />
    </>
  );
};

export default editProfile;
