import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./navigators/Stack";

export const RootNavigation = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);
