import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Pressable, StyleSheet, ToastAndroid, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { weatherApi } from "src/api/weatherApi";
import { useStore } from "src/store";
import { AutoSuggestionResponse } from "src/types/api/AutoSuggestionResponse";
import { StackNavigationRoutes } from "src/types/navigation/routes/stack";

type SearchItemProps = {
  data: AutoSuggestionResponse;
};

export const SearchItem = ({ data }: SearchItemProps) => {
  // States
  const [loading, setLoading] = useState(false);

  // Global Store
  const setWeatherData = useStore((state) => state.setWeatherData);

  // Navigation
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationRoutes>>();

  // Handle User Click
  const handleOnPress = async () => {
    setLoading(true);
    const weatherData = await weatherApi.getWeatherData(`id:${data.id}`);

    if (weatherData.data) {
      setWeatherData(weatherData.data);
      setLoading(false);
      navigation.goBack();
    } else {
      ToastAndroid.show(weatherData.error?.message!, ToastAndroid.SHORT);
    }
  };

  // Render
  return (
    <Pressable
      onPress={handleOnPress}
      android_ripple={{ borderless: false, color: "#5e5e5e" }}
      style={styles.root}
    >
      <View style={styles.container}>
        <Text variant="titleLarge">{data.name} </Text>

        {/* Show Region */}
        <Text style={{ color: "grey" }}>
          {data.region}, {data.country}
        </Text>
      </View>

      {/* If user clicks on item show loading indicator */}
      {loading && (
        <View>
          <ActivityIndicator size={"small"} />
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    overflow: "hidden",
    padding: 11,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
});
