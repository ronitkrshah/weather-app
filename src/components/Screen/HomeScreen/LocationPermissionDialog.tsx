import { Dispatch, FC, SetStateAction } from "react";
import { Dialog, Text, Button } from "react-native-paper";
import { requestLocation } from "src/utils/getLocation";

type LocationPermissionDialogProps = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

export const LocationPermissionDialog: FC<LocationPermissionDialogProps> = ({
  visible,
  setVisible,
}) => {
  // Hide Dialog
  function hideDialog() {
    setVisible(false);
  }

  // Request Location from user
  function handleAccept() {
    requestLocation();
    hideDialog();
  }
  return (
    <Dialog visible={visible} onDismiss={hideDialog}>
      <Dialog.Content>
        <Text>
          To continue, let your device turn on location, which uses Google's
          location service
        </Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={hideDialog}>Cancel</Button>
        <Button onPress={handleAccept}>Ok</Button>
      </Dialog.Actions>
    </Dialog>
  );
};
