import { FloatingActionButtons } from "src/components/Screen/HomeScreen/FloatingActionButtons";
import { BaseLayout } from "src/layouts/Base";

export const HomeScreen = () => {
  return (
    <BaseLayout>
      {/* Floating Action Button for Search and Location */}
      <FloatingActionButtons />
    </BaseLayout>
  );
};
