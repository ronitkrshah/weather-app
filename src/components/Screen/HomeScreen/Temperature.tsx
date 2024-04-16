import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { SurfaceContainer } from "src/components/Common/Containers/SurfaceContainer";

export const Temperature = () => {
  return (
    <SurfaceContainer>
      <View>
        <Text style={styles.textCenter}>Current (Celsius)</Text>
        <Text style={{ ...styles.textCenter, fontSize: 80 }}>26</Text>
      </View>
      <View>
        <Text style={styles.textCenter}>Feels Like (Celsius)</Text>
        <Text style={{ ...styles.textCenter, fontSize: 80 }}>29</Text>
      </View>
    </SurfaceContainer>
  );
};

const styles = StyleSheet.create({
  textCenter: {
    textAlign: "center",
  },
});
