import { SurfaceContainer } from "src/components/Common/Containers/SurfaceContainer";
import { Card as CardItem } from "src/components/Common/Card";
import { useStore } from "src/store";
import { Text, useTheme } from "react-native-paper";
import { Linking, StyleSheet, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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

        {/* API Link */}
        <View style={styles.linkingContainer}>
          <MaterialIcons
            style={styles.openUrlIcon}
            name="open-in-new"
            size={16}
          />
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL("https://www.weatherapi.com")}
          >
            weatherapi.com
          </Text>
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
  linkingContainer: {
    marginVertical: 15,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  openUrlIcon: {
    transform: [{ translateY: 2 }],
  },
  linkText: {
    color: "grey",
    textDecorationLine: "underline",
  },
});
