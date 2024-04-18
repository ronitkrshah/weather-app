import { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "react-native-paper";

type ColoredDateProps = {
  date: string;
};

export const ColoredDate: FC<ColoredDateProps> = ({ date }) => {
  const { colors } = useTheme();

  return (
    <Text style={{ ...styles.colored, backgroundColor: colors.primary }}>
      {new Date(date).toDateString()}
    </Text>
  );
};

const styles = StyleSheet.create({
  colored: {
    flex: 1,
    textAlign: "center",
    color: "#FFF",
    width: "50%",
    alignSelf: "center",
    borderRadius: 20,
    elevation: 2,
    fontSize: 16,
  },
});
