import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Card } from "src/components/Screen/HomeScreen/Card";
import { FloatingActionButtons } from "src/components/Screen/HomeScreen/FloatingActionButtons";
import { Header } from "src/components/Shared/Header";
import { Temperature } from "src/components/Screen/HomeScreen/Temperature";
import { TemperatureChart } from "src/components/Screen/HomeScreen/TemperatureChart";
import { StackNavigationRoutes } from "src/types/navigation/routes/stack";
import { BaseLayout } from "src/layouts/Base";

// Navigation Props
type Props = NativeStackScreenProps<StackNavigationRoutes, "Home">;

export const HomeScreen: FC<Props> = ({ navigation }) => {
  // Go to forecast screen
  function goToForecast() {
    navigation.navigate("Forecast");
  }

  return (
    <>
      <BaseLayout type="SCROLL_VIEW">
        {/* Header with Location name and date */}
        <Header showDate />

        {/* Spacing */}
        <View style={{ height: 20 }} />

        {/* Current Temperature and Feels Like */}
        <Temperature />

        {/* Card With details */}
        <Card />

        {/* Temperature Chart */}
        <TemperatureChart />

        {/* Spacing */}
        <View style={{ height: 20 }} />

        {/* Forecast Page */}
        <Button onPress={goToForecast} mode="contained">
          See Weather Forecast
        </Button>

        {/* <FloatingActionButtons /> */}
      </BaseLayout>

      {/* Floating Buttons  for search & current user location */}
      <FloatingActionButtons />
    </>
  );
};
