import AsyncStorage from "@react-native-async-storage/async-storage";
import Geolocation from "@react-native-community/geolocation";
import { useState } from "react";
import { PermissionsAndroid, StyleSheet, ToastAndroid } from "react-native";
import { FAB } from "react-native-paper";
import { weatherApi } from "src/api/weatherApi";
import { useStore } from "src/store";
import { LocationPermissionDialog } from "../LocationPermissionDialog";

export const FABLocation = () => {
  const [visibleDialog, setVisibleDialog] = useState(false);
  const setWeatherData = useStore((state) => state.setWeatherData);

  // Handle Click on FAB
  async function handleClick() {
    // getting status for FINE_LOCATION
    const granted = await PermissionsAndroid.check(
      "android.permission.ACCESS_FINE_LOCATION",
    );

    // Check if location is granted
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

  // Render
  return (
    <>
      <FAB
        icon={"compass-outline"}
        style={styles.locationFab}
        onPress={handleClick}
      />

      <LocationPermissionDialog
        visible={visibleDialog}
        setVisible={setVisibleDialog}
      />
    </>
  );
};

const styles = StyleSheet.create({
  locationFab: {
    position: "absolute",
    bottom: 160,
    right: 30,
  },
});
