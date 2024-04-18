import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { useStore } from "src/store";

type Props = {
  showDate?: boolean;
};

export const Header: FC<Props> = ({ showDate = true }) => {
  const weatherData = useStore((state) => state.weatherData);

  const { colors } = useTheme();

  // Render
  return (
    <View>
      <Text variant="titleLarge" style={{ textAlign: "center" }}>
        {weatherData &&
          `${weatherData.location.name}, ${weatherData.location.country}`}
      </Text>

      {/* Date */}
      {showDate && (
        <Text style={{ ...styles.date, backgroundColor: colors.primary }}>
          {new Date(
            weatherData?.location.localtime.split(" ")[0]!,
          ).toDateString()}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    marginTop: 10,
    textAlign: "center",
    color: "#FFF",
    width: "50%",
    alignSelf: "center",
    borderRadius: 20,
    elevation: 2,
    fontSize: 16,
    transform: [{ translateY: -5 }],
  },
});
