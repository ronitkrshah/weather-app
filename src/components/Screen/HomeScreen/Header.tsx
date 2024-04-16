import { View } from "react-native";
import { Text } from "react-native-paper";
import { useStore } from "src/store";

export const Header = () => {
  const weatherData = useStore((state) => state.weatherData);

  return (
    <View>
      <Text variant="titleLarge" style={{ textAlign: "center" }}>
        {weatherData &&
          `${weatherData.location.name}, ${weatherData.location.country}`}
      </Text>
    </View>
  );
};
