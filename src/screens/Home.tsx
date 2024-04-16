import { View } from "react-native";
import Toast from "react-native-toast-message";
import { Card } from "src/components/Screen/HomeScreen/Card";
import { FloatingActionButtons } from "src/components/Screen/HomeScreen/FloatingActionButtons";
import { Header } from "src/components/Screen/HomeScreen/Header";
import { Temperature } from "src/components/Screen/HomeScreen/Temperature";
import { BaseLayout } from "src/layouts/Base";

export const HomeScreen = () => {
  return (
    <BaseLayout>
      <Header />
      {/* Spacing */}
      <View style={{ height: 80 }} />
      <Temperature />
      <Card />

      <Toast />

      {/* Floating Action Button for Search and Location */}
      <FloatingActionButtons />
    </BaseLayout>
  );
};
