import AsyncStorage from "@react-native-async-storage/async-storage";
import Geolocation from "@react-native-community/geolocation";
import { useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, FAB, Text } from "react-native-paper";
import Toast from "react-native-toast-message";
import { weatherApi } from "src/api/weatherApi";
import { Dialog } from "src/components/Common/Dialog";
import { useStore } from "src/store";

export const FABLocation = () => {
  const [visibleDialog, setVisibleDialog] = useState(false);
  const setWeatherData = useStore((state) => state.setWeatherData);

  // Getting Geolocation permission
  const handleClick = useCallback(() => {
    Geolocation.getCurrentPosition(
      (pos) => {
        // Saving coords to local storage to fetch data on welcome screen
        const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
        // Saving Item
        AsyncStorage.setItem("location", coords);

        // Refetch weather data
        weatherApi.getWeatherData(coords).then(({ data }) => {
          data && setWeatherData(data);
        });
      },
      (error) => {
        // If permission is denied show dialog
        if (error.PERMISSION_DENIED) {
          setVisibleDialog(true);
        }
      },
    );
  }, []);

  // Handle Ok on Dialog
  const handleOk = () => {
    // Hide Dialog
    setVisibleDialog(false);

    Geolocation.requestAuthorization(
      // Handle success
      () => {
        Toast.show({
          type: "success",
          text1: "Location Permission Granted",
        });
      },
      // Handle error
      (error) => {
        Toast.show({
          type: "error",
          text1: error.message,
        });
      },
    );
  };

  // Render
  return (
    <>
      <FAB
        icon={"compass-outline"}
        style={styles.locationFab}
        onPress={handleClick}
      />

      {visibleDialog && (
        <Dialog
          visible={visibleDialog}
          setVisible={setVisibleDialog}
          content={
            <Text>
              To conitnue, let your device turn on location, which uses Google's
              location service
            </Text>
          }
          actions={
            <>
              <Button onPress={() => setVisibleDialog(false)}>Cancel</Button>
              <Button onPress={handleOk}>Ok</Button>
            </>
          }
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  locationFab: {
    position: "absolute",
    bottom: 160,
    right: 16,
  },
});
