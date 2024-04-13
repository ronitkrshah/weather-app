import { useMemo } from "react";
import type { FC, PropsWithChildren } from "react";
import { useColorScheme } from "react-native";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";

import {
  Provider as MaterialYouTheme,
  MD3LightTheme,
  MD3DarkTheme,
} from "react-native-paper";

export const MaterialYouThemeProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  // Material You Theme
  const materialTheme = useMemo(
    () =>
      colorScheme === "dark"
        ? { ...MD3DarkTheme, colors: theme.dark }
        : { ...MD3LightTheme, colors: theme.light },
    [colorScheme, theme],
  );

  // Render
  return <MaterialYouTheme theme={materialTheme}>{children}</MaterialYouTheme>;
};
