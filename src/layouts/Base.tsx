import type { FC, PropsWithChildren } from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Props
interface BaseLayoutProps extends PropsWithChildren {
  type?: "VIEW" | "SCROLL_VIEW";
}

export const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  type = "VIEW",
}) => {
  // Material You Colors
  const colors = useTheme().colors;

  // Safe Area Insets
  const insets = useSafeAreaInsets();

  return (
    <>
      {/* Update StatusBar */}
      <StatusBar
        backgroundColor={"transparent"}
        translucent
        barStyle={"dark-content"}
      />

      {/* BaseLayout */}
      {type === "VIEW" ? (
        <View
          style={{
            ...styles.base,
            backgroundColor: colors.surfaceVariant,
            paddingTop: insets.top + 10,
            paddingBottom: insets.bottom,
          }}
        >
          {children}
        </View>
      ) : (
        // If type == "SCROLL_VIEW" return ScrollView
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            ...styles.base,
            backgroundColor: colors.surfaceVariant,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          }}
        >
          {children}
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  base: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
