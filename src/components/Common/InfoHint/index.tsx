import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, View } from "react-native";
import { FC } from "react";
import { Text } from "react-native-paper";

type InfoHintProps = {
  text: string;
};

export const InfoHint: FC<InfoHintProps> = ({ text }) => {
  return (
    <View style={styles.root}>
      <MaterialIcons name="info-outline" size={24} color={"#424242"} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginVertical: 30,
  },
  text: {
    paddingVertical: 10,
    fontSize: 14,
    color: "#424242",
  },
});
