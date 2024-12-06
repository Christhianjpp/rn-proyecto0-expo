import FormLogin from "components/auth/FormLogin";

import { View } from "react-native";

const Logins = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 25,
      }}
    >
      <FormLogin />
    </View>
  );
};

export default Logins;
