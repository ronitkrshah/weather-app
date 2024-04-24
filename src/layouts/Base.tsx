import type { FC, PropsWithChildren } from "react";
import { ScrollView, ScrollViewProps, StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Props
interface BaseLayoutProps extends PropsWithChildren {
  type?: "VIEW" | "SCROLL_VIEW";
  scrollViewProps?: ScrollViewProps;
}

export const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  scrollViewProps,
  type = "VIEW",
}) => {
  // Material You Colors
  const colors = useTheme().colors;

  // Safe Area Insets
  const insets = useSafeAreaInsets();

  // Return normal view
  return (
    <View
      style={{
        ...styles.rootContainer,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: colors.surfaceVariant,
      }}
    >
      {/* Check if ScrollView */}
      {type === "SCROLL_VIEW" ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          children={children}
          {...scrollViewProps}
        />
      ) : (
        children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
