import FormLogin from "components/auth/FormLogin";
import FormRegister from "components/auth/FormRegister";

import { View } from "react-native";

const Registers = () => {
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
      <FormRegister />
    </View>
  );
};

export default Registers;
