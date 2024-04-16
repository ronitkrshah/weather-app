import { FC, PropsWithChildren } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Surface } from "react-native-paper";

type SurfaceContainerProps = {
  style?: ViewStyle;
};

export const SurfaceContainer: FC<
  PropsWithChildren & SurfaceContainerProps
> = ({ children, style }) => {
  return (
    <Surface elevation={2} style={{ ...styles.surface, ...style }}>
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
