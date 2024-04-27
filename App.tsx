import { StatusBar } from "react-native";
import { RootNavigation } from "./src/navigation/RootNavigation";
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

      <RootNavigation />
    </>
  );
};

export default App;
