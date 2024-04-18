import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { ColoredDate } from "src/components/Common/ColoredDate";
import getDayFromDate from "src/utils/getDayFromDate";

type DayProps = {
  date: string;
};

export const Day: FC<DayProps> = ({ date }) => {
  return (
    <View style={styles.container}>
      <Text style={{ flex: 1, fontSize: 16 }}>{getDayFromDate(date)}</Text>
      <ColoredDate date={date} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
});
