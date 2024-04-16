import { View } from "react-native";
import { Card } from "src/components/Screen/HomeScreen/Card";
import { FloatingActionButtons } from "src/components/Screen/HomeScreen/FloatingActionButtons";
import { Header } from "src/components/Screen/HomeScreen/Header";
import { Temperature } from "src/components/Screen/HomeScreen/Temperature";
import { TemperatureChart } from "src/components/Screen/HomeScreen/TemperatureChart";
import { BaseLayout } from "src/layouts/Base";

export const HomeScreen = () => {
  return (
    <BaseLayout>
      <Header />
      {/* Spacing */}
      <View style={{ height: 20 }} />
      <Temperature />
      <Card />

      {/* Temperature Chart */}
      <TemperatureChart />
      {/* Floating Action Button for Search and Location */}
      <FloatingActionButtons />
    </BaseLayout>
  );
};
