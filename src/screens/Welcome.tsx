import { Text } from "react-native-paper";
import { BaseLayout } from "../layouts/Base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { StackNavigationRoutes } from "src/types/navigation/routes/stack";

export const WelcomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationRoutes>>();

  // TimeOut
  setTimeout(() => {
    navigation.replace("Home");
  }, 1000);

  return (
    <BaseLayout>
      <MaterialCommunityIcons name="weather-cloudy" size={80} />
      <Text variant="titleLarge">Weather</Text>
      <Text variant="titleSmall" style={{ color: "grey" }}>
        A FOSS Material You Weather App
      </Text>
    </BaseLayout>
  );
};
