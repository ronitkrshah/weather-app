import { MaterialYouThemeProvider } from "./src/providers/MaterialYouThemeProvider";
import { WelcomeScreen } from "./src/screens/Welcome";

const App = () => {
  return (
    <MaterialYouThemeProvider>
      <WelcomeScreen />
    </MaterialYouThemeProvider>
  );
};

export default App;
