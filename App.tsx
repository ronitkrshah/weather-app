import { MaterialYouThemeProvider } from "./src/providers/MaterialYouThemeProvider";
import { RootNavigation } from "./src/navigation/RootNavigation";

const App = () => {
  return (
    <MaterialYouThemeProvider>
      <RootNavigation />
    </MaterialYouThemeProvider>
  );
};

export default App;
