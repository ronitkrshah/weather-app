import { StatusBar } from "react-native";
import { MaterialYouThemeProvider } from "./src/providers/MaterialYouThemeProvider";
import { RootNavigation } from "./src/navigation/RootNavigation";
import { Portal } from "react-native-paper";
import Geolocation from "@react-native-community/geolocation";

// Don't auto request location permission
Geolocation.setRNConfiguration({
  skipPermissionRequests: true,
});

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle={"dark-content"}
      />

      <MaterialYouThemeProvider>
        <Portal>
          <RootNavigation />
        </Portal>
      </MaterialYouThemeProvider>
    </>
  );
};

export default App;
