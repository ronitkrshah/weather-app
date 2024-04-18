import { FC, PropsWithChildren } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Surface } from "react-native-paper";

type SurfaceContainerProps = {
  style?: ViewStyle;
  mode?: "flat" | "elevated";
};

export const SurfaceContainer: FC<
  PropsWithChildren & SurfaceContainerProps
> = ({ children, style, mode = "elevated" }) => {
  return (
    <Surface elevation={2} style={{ ...styles.surface, ...style }} mode={mode}>
      {children}
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 15,
    flexDirection: "row",
  },
});
