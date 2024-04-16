import { PermissionsAndroid } from "react-native";

/**
 * Request Location
 */
export const requestLocation = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: "Weather App Location Permission",
      message: "Weather App needs access to your location for accurate results",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK",
    },
  );

  return granted === "granted" ? true : false;
};
