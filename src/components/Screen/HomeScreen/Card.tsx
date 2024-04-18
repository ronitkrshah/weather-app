import { SurfaceContainer } from "src/components/Common/Containers/SurfaceContainer";
import { Card as CardItem } from "src/components/Common/Card";
import { useStore } from "src/store";
import { Text, useTheme } from "react-native-paper";
import { StyleSheet, View } from "react-native";

export const Card = () => {
  const weatherData = useStore((state) => state.weatherData);
  const { colors } = useTheme();

  return (
    weatherData && (
      <SurfaceContainer style={{ flexDirection: "column" }}>
        <Text
          variant="titleLarge"
          style={{ ...styles.weatherCondition, color: colors.primary }}
        >
          {weatherData.current.condition.text}
        </Text>

        <View style={styles.cardContainer}>
          <CardItem
            icon="weather-windy"
            title={`${weatherData.current.wind_kph} Km/h`}
            subtitle="WindSpeed"
          />
          <CardItem
            icon="water-outline"
            title={`${weatherData.current.humidity}%`}
            subtitle="Humidity"
          />
          <CardItem
            icon="eye"
            title={`${weatherData.current.vis_km} Km`}
            subtitle="Visibility"
          />
        </View>
      </SurfaceContainer>
    )
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  weatherCondition: {
    marginBottom: 10,
    fontWeight: "700",
  },
});
