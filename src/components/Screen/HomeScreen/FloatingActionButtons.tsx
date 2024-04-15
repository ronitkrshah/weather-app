import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { StackNavigationRoutes } from "src/types/navigation/routes/stack";

export const FloatingActionButtons = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationRoutes>>();

  /* navigate to search page*/
  function navigatieToSearchPage() {
    navigation.push("Search");
  }

  // Render
  return (
    <>
      <FAB icon={"compass-outline"} style={styles.locationFab} />
      <FAB
        icon={"magnify"}
        style={styles.searchFab}
        onPress={navigatieToSearchPage}
      />
    </>
  );
};

const styles = StyleSheet.create({
  locationFab: {
    position: "absolute",
    bottom: 160,
    right: 16,
  },
  searchFab: {
    position: "absolute",
    bottom: 80,
    right: 16,
  },
});
