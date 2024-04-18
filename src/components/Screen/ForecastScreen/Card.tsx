import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Card as CardItem } from "src/components/Common/Card";
import { Forecastday } from "src/types/api/WeatherResponse";

export const Card: FC<{ data: Forecastday }> = ({ data }) => {
  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <View style={styles.innerContainer}>
        <CardItem
          icon="thermometer-low"
          title={`${data?.day.mintemp_c}°`}
          subtitle="Min Temperature"
        />
        <CardItem
          icon="thermometer"
          title={`${data?.day.avgtemp_c}°`}
          subtitle="Avg Temperature"
        />
        <CardItem
          icon="thermometer-high"
          title={`${data?.day.maxtemp_c}°`}
          subtitle="Max Temperature"
        />
      </View>
      <View style={styles.innerContainer}>
        <CardItem
          icon="weather-windy"
          title={`${data?.day.maxwind_kph} Km/h`}
          subtitle="Avg WindSpeed"
        />
        <CardItem
          icon="water-outline"
          title={`${data?.day.avghumidity}%`}
          subtitle="Avg Humidity"
        />
        <CardItem
          icon="eye"
          title={`${data?.day.avgvis_km} Km`}
          subtitle="Avg Visibility"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 20,
    flexWrap: "wrap",
    gap: 25,
  },
  innerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
