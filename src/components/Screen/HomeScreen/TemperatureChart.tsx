import { View, Dimensions, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useTheme } from "react-native-paper";
import { useStore } from "src/store";
import { filterHrsByInterval } from "src/utils/filterHrsByInterval";

export const TemperatureChart = () => {
  // Global store
  const data = useStore((state) => state.weatherData);
  const { colors } = useTheme();

  if (!data) return null;

  // Item Contains Original Label array
  const orgLabelsArray = data.forecast.forecastday[0].hour.map(
    (item) => item.time.split(" ")[1],
  );
  const orgHoursArray = data.forecast.forecastday[0].hour.map((item) =>
    item.temp_c.toString(),
  );

  // Filtered Array
  const filteredLabels = filterHrsByInterval(orgLabelsArray, 4);
  const filteredHoursSTR = filterHrsByInterval(orgHoursArray, 3); // string
  const filteredHoursINT = filteredHoursSTR.map((str) => parseInt(str)); // number

  return (
    <View>
      <Text>Temperature Chart</Text>
      <LineChart
        data={{
          labels: filteredLabels,
          datasets: [
            {
              data: filteredHoursINT,
            },
          ],
        }}
        width={Dimensions.get("window").width - 32}
        height={220}
        yAxisSuffix="°C"
        chartConfig={{
          backgroundColor: colors.primaryContainer,
          backgroundGradientFrom: colors.primary,
          backgroundGradientTo: colors.primaryContainer,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 20,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: colors.onError,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 20,
        }}
      />
    </View>
  );
};
