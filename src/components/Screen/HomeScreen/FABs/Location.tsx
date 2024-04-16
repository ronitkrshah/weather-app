import Geolocation from "@react-native-community/geolocation";
import { useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, FAB, Text } from "react-native-paper";
import Toast from "react-native-toast-message";
import { Dialog } from "src/components/Common/Dialog";

export const FABLocation = () => {
  const [visibleDialog, setVisibleDialog] = useState(false);

  // Getting Geolocation permission
  const handleClick = useCallback(() => {
    Geolocation.getCurrentPosition(
      (pos) => {
        // ... Do something later
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
