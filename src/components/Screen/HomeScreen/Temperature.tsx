import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { SurfaceContainer } from "src/components/Common/Containers/SurfaceContainer";
import { useStore } from "src/store";

export const Temperature = () => {
  const weatherData = useStore((state) => state.weatherData);

  return (
    weatherData && (
      <View style={{ alignItems: "center" }}>
        <SurfaceContainer style={{ width: "98%" }}>
          <View>
            <Text style={styles.textCenter}>Current (Celsius)</Text>
            <Text style={{ ...styles.textCenter, fontSize: 50 }}>
              {Math.round(weatherData.current.temp_c)}°
            </Text>
          </View>
          <View>
            <Text style={styles.textCenter}>Feels Like (Celsius)</Text>
            <Text style={{ ...styles.textCenter, fontSize: 50 }}>
              {Math.round(weatherData.current.feelslike_c)}°
            </Text>
          </View>
        </SurfaceContainer>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  textCenter: {
    textAlign: "center",
  },
});
