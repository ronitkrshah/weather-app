import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { ColoredDate } from "src/components/Common/ColoredDate";
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
      <ColoredDate date={date} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 25,
    paddingVertical: 5,
  },
});
