import { StackNavigationRoutes } from "src/types/navigation/routes/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { WelcomeScreen } from "src/screens/Welcome";
import { HomeScreen } from "src/screens/Home";

const Stack = createNativeStackNavigator<StackNavigationRoutes>();

export const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);
