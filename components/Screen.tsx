import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface ScreenProps {
  children: ReactNode;
}

export function Screen({ children }: ScreenProps): JSX.Element {
  return <View style={style.counter}>{children}</View>;
}

const style = StyleSheet.create({
  counter: {
    flex: 1,
    paddingTop: 2,
    paddingHorizontal: 4,
  },
});
