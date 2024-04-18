import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Card } from "src/components/Screen/HomeScreen/Card";
import { FloatingActionButtons } from "src/components/Screen/HomeScreen/FloatingActionButtons";
import { Header } from "src/components/Shared/Header";
import { Temperature } from "src/components/Screen/HomeScreen/Temperature";
import { TemperatureChart } from "src/components/Screen/HomeScreen/TemperatureChart";
import { BaseLayout } from "src/layouts/Base";
import { StackNavigationRoutes } from "src/types/navigation/routes/stack";

// Navigation Props
type Props = NativeStackScreenProps<StackNavigationRoutes, "Home">;

export const HomeScreen: FC<Props> = ({ navigation }) => {
  // Go to forecast screen
  function goToForecast() {
    navigation.navigate("Forecast");
  }

  return (
    <BaseLayout>
      <Header />
      {/* Spacing */}
      <View style={{ height: 20 }} />
      <Temperature />
      <Card />

      {/* Temperature Chart */}
      <TemperatureChart />

      {/* Navigate to Forecast page */}
      <View style={{ height: 20 }} />
      <Button mode="contained" onPress={goToForecast}>
        Go To Forecast
      </Button>

      {/* Floating Action Button for Search and Location */}
      <FloatingActionButtons />
    </BaseLayout>
  );
};
