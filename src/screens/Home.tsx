import Toast from "react-native-toast-message";
import { FloatingActionButtons } from "src/components/Screen/HomeScreen/FloatingActionButtons";
import { BaseLayout } from "src/layouts/Base";

export const HomeScreen = () => {
  console.log("Home Rendered");

  return (
    <BaseLayout>
      {/* Floating Action Button for Search and Location */}
      <FloatingActionButtons />

      <Toast />
    </BaseLayout>
  );
};
