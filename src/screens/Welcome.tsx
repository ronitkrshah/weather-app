import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { BaseLayout } from "../layouts/Base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import publicIP from "react-native-public-ip";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { StackNavigationRoutes } from "src/types/navigation/routes/stack";
import { useStore } from "src/store";
import { weatherApi } from "src/api/weatherApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const WelcomeScreen = () => {
  const setWeatherData = useStore((state) => state.setWeatherData);
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationRoutes>>();

  /*
   * Since Welcome screen only show on stratup there's no need to use useEffect
   * hook
   */
  AsyncStorage.getItem("location").then((data) => {
    /*
     * If Async Storage location not found use public ip
     */
    if (data) {
      weatherApi.getWeatherData(data).then(({ data: info }) => {
        info && setWeatherData(info);
        navigation.replace("Home");
      });
    } else {
      /*
       * Use public Ip address for fetchng location*/
      publicIP().then((ip) => {
        weatherApi.getWeatherData(ip).then(({ data: info }) => {
          info && setWeatherData(info);
          navigation.replace("Home");
        });
      });
    }
  });

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
