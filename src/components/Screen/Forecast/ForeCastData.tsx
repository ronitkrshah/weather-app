import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Forecastday } from "src/types/api/WeatherResponse";
import { Day } from "./Day";
import { Card } from "./Card";

type ForeCastDataProps = {
  data: Forecastday;
};

export const ForeCastData: FC<ForeCastDataProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Day date={data.date} />

      <Card data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
