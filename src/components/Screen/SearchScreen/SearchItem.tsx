import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { weatherApi } from "src/api/weatherApi";
import { useStore } from "src/store";
import { AutoSuggestionResponse } from "src/types/api/AutoSuggestionResponse";
import { StackNavigationRoutes } from "src/types/navigation/routes/stack";

type SearchItemProps = {
  data: AutoSuggestionResponse;
};

export const SearchItem = ({ data }: SearchItemProps) => {
  // Global Store
  const setWeatherData = useStore((state) => state.setWeatherData);

  // Navigation
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationRoutes>>();

  const handleOnPress = () => {
    weatherApi.getWeatherData(`id:${data.id}`).then(({ data }) => {
      data && setWeatherData(data);
    });
    // Go to home screen
    navigation.goBack();
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
