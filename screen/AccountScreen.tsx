import React from "react";
import { Button, Text, View } from "react-native";
import { LogOut } from "../components/auth/LogOut";
import { MyUser } from "components/account/MyUser";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { accountStyles } from "theme/profileTheme";
import { Link } from "expo-router";

import { useRouter } from "expo-router";
import DateOfBirth from "components/account/DateOfBirth";
import DiagnosisDate from "components/account/DiagnosisDate";
import TypeDiabetes from "components/account/TypeDiabetes";
import ButtonCardView from "components/account/ButtonCardView";
const AccountScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: "white",
        paddingHorizontal: 15,
        justifyContent: "space-between",
      }}
    >
      <View>
        <View style={accountStyles.card}>
          <MyUser />
          <View style={accountStyles.user}>
            {/* <View>
            <DateOfBirth />
          </View>
          <View>
            <DiagnosisDate />
          </View>
          <View>
            <TypeDiabetes />
          </View> */}
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <ButtonCardView title="Edad" data="30 años" nameIcon="calendar" />

          <ButtonCardView
            title="Fecha de Diagnostico"
            data="10-4-2016"
            nameIcon="calendar"
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <ButtonCardView
            title="Tipo de Diabetes"
            data="Tipo 1"
            nameIcon="note"
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          paddingHorizontal: 15,
          paddingVertical: 20,
          gap: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Configuración</Text>
        {/* <Button title="Setting" onPress={() => router.push("yo/setting")} /> */}
        <LogOut />
      </View>
    </View>
  );
};

export default AccountScreen;
