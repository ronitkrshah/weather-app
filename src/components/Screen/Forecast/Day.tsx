import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import getDayFromDate from "src/utils/getDayFromDate";

type DayProps = {
  date: string;
};

export const Day: FC<DayProps> = ({ date }) => {
  const { colors } = useTheme();

  return (
    <View style={{ ...styles.container, backgroundColor: colors.primary }}>
      <Text style={{ flex: 1, fontSize: 16, color: "white" }}>
        {getDayFromDate(date)}
      </Text>
      <Text variant="titleMedium" style={{ color: "white" }}>
        {new Date(date).toDateString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 8,
  },
});
