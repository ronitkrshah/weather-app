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
      <CardItem
        icon="air"
        title={`${data?.day.maxwind_kph} Km/h`}
        subtitle="WindSpeed"
      />
      <CardItem
        icon="water-drop"
        title={`${data?.day.avghumidity}%`}
        subtitle="Humidity"
      />
      <CardItem
        icon="visibility"
        title={`${data?.day.avgvis_km} Km`}
        subtitle="Visibility"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 20,
  },
});
