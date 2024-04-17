import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { BaseLayout } from "../layouts/Base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import publicIP from "react-native-public-ip";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { StackNavigationRoutes } from "src/types/navigation/routes/stack";
import { useStore } from "src/store";
import { weatherApi } from "src/api/weatherApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FC } from "react";

// Navigation Props
type Props = NativeStackScreenProps<StackNavigationRoutes, "Welcome">;

export const WelcomeScreen: FC<Props> = ({ navigation }) => {
  const setWeatherData = useStore((state) => state.setWeatherData);

  /*
   * Since Welcome screen only show on stratup there's no need to use useEffect
   * hook
   */
  (async function () {
    // This will be Latitude & Longitude or public IP address
    let location: string;

    // Cooardinates from local storage
    const cooardinates = await AsyncStorage.getItem("location");

    // If cooardinates aren't available use public IP address to get weather
    // data
    if (cooardinates) {
      location = cooardinates;
    } else {
      location = await publicIP();
    }

    /* Getting data from weather api */
    const weatherData = await weatherApi.getWeatherData(location);

    // If weatherData isn't null update Global Store
    weatherData.data && setWeatherData(weatherData.data);

    // navigate to home screen
    navigation.replace("Home");
  })();

  // Render
  return (
    <BaseLayout>
      <View style={styles.container}>
        <MaterialCommunityIcons name="weather-cloudy" size={80} />
        <Text variant="titleLarge">Weather</Text>
        <Text variant="titleSmall" style={{ color: "grey" }}>
          A FOSS Material You Weather App
        </Text>

        <View style={{ height: 20 }} />
        <ActivityIndicator size="large" />
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
