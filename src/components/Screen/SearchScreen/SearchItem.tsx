import { Pressable, StyleSheet } from "react-native";
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
    <Pressable
      onPress={handleOnPress}
      android_ripple={{ borderless: false, color: "#5e5e5e" }}
      style={styles.container}
    >
      <Text variant="titleLarge">
        {data.name}, {data.country}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    paddingVertical: 15,
  },
});
