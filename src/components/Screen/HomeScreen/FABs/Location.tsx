import AsyncStorage from "@react-native-async-storage/async-storage";
import Geolocation from "@react-native-community/geolocation";
import { useState } from "react";
import { PermissionsAndroid, StyleSheet, ToastAndroid } from "react-native";
import { Button, FAB, Text } from "react-native-paper";
import { weatherApi } from "src/api/weatherApi";
import { Dialog } from "src/components/Common/Dialog";
import { useStore } from "src/store";
import { requestLocation } from "src/utils/getLocation";

export const FABLocation = () => {
  const [visibleDialog, setVisibleDialog] = useState(false);
  const setWeatherData = useStore((state) => state.setWeatherData);

  // Handle Click on FAB
  async function handleClick() {
    // getting status for FINE_LOCATION
    const granted = await PermissionsAndroid.check(
      "android.permission.ACCESS_FINE_LOCATION",
    );

    if (granted) {
      Geolocation.getCurrentPosition(
        (position) => {
          const coords = `${position.coords.latitude},${position.coords.longitude}`;

          // Saving Coords to local storage
          AsyncStorage.setItem("location", coords);

          // Fetching Data from api
          weatherApi.getWeatherData(coords).then(({ data }) => {
            // update Global Store
            data && setWeatherData(data);
          });
        },
        /*
         * Show Toast Message if Geolocation throws an error
         * */
        (error) => {
          ToastAndroid.show(error.message, ToastAndroid.SHORT);
        },
      );
    } else {
      // If Location permission is not granted by user show Dialog for requesting
      // Location Permission
      setVisibleDialog(true);
    }
  }

  // Handle Ok on Dialog
  function handleOk() {
    // Ask user for location premission
    requestLocation();
    // Hide Dialog
    setVisibleDialog(false);
  }

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
              To continue, let your device turn on location, which uses Google's
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
