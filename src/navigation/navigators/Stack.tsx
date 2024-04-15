import { StackNavigationRoutes } from "src/types/navigation/routes/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { WelcomeScreen } from "src/screens/Welcome";
import { HomeScreen } from "src/screens/Home";
import { SearchScreen } from "src/screens/Search";

const Stack = createNativeStackNavigator<StackNavigationRoutes>();

export const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ animation: "fade" }}
    />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{ animation: "slide_from_right" }}
    />
  </Stack.Navigator>
);
