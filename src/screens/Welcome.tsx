import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { BaseLayout } from "../layouts/Base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { StackNavigationRoutes } from "src/types/navigation/routes/stack";
import { useStore } from "src/store";
import { useFetchData } from "src/hooks/useFetchData";
import { useEffect } from "react";

export const WelcomeScreen = () => {
  const setWeatherData = useStore((state) => state.setWeatherData);
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationRoutes>>();

  const { data } = useFetchData("/forecast.json", "Ishikawa", {
    aqi: "no",
    alerts: "no",
  });

  // effect
  useEffect(() => {
    if (data) {
      console.log("Data Found");

      setWeatherData(data);
      navigation.replace("Home");
    }
  }, [data]);

  return (
    <BaseLayout>
      <View style={styles.container}>
        <MaterialCommunityIcons name="weather-cloudy" size={80} />
        <Text variant="titleLarge">Weather</Text>
        <Text variant="titleSmall" style={{ color: "grey" }}>
          A FOSS Material You Weather App
        </Text>
      </View>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
