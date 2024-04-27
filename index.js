/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { MaterialYouThemeProvider } from "src/providers/MaterialYouThemeProvider";

/**
 *  Main function that wrapps All providers
 */
function Main() {
  return (
    <MaterialYouThemeProvider>
      <App />
    </MaterialYouThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
