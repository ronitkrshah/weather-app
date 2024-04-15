import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { AutoSuggestionResponse } from "src/types/api/AutoSuggestionResponse";

type SearchItemProps = {
  data: AutoSuggestionResponse;
};

export const SearchItem = ({ data }: SearchItemProps) => {
  const handleOnPress = () => {
    console.log("Lat:", data.lat);
  };

  return (
    <View style={styles.view}>
      <Pressable
        onPress={handleOnPress}
        android_ripple={{ borderless: false, color: "#5e5e5e" }}
        style={styles.container}
      >
        <Text variant="titleLarge">
          {data.name}, {data.country}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10,
  },
  container: {
    overflow: "hidden",
    padding: 10,
  },
});
