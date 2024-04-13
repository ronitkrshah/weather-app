import type { FC, PropsWithChildren } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  // Material You Colors
  const colors = useTheme().colors;

  return (
    <SafeAreaProvider style={styles.safeArea}>
      <StatusBar
        backgroundColor={colors.surfaceVariant}
        barStyle={"dark-content"}
      />
      <View style={{ ...styles.base, backgroundColor: colors.surfaceVariant }}>
        {children}
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  base: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});
