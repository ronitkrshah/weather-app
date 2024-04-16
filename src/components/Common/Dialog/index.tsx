import { Dispatch, ReactNode, SetStateAction } from "react";
import { Dialog as MDDialog } from "react-native-paper";

type DialogProps = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  title?: string;
  content?: ReactNode;
  actions?: ReactNode;
};

export const Dialog = (props: DialogProps) => {
  function hideDialog() {
    props.setVisible(false);
  }

  return (
    <MDDialog visible={props.visible} onDismiss={hideDialog}>
      {props.title && <MDDialog.Title>{props.title}</MDDialog.Title>}
      {props.content && <MDDialog.Content>{props.content}</MDDialog.Content>}
      {props.actions && <MDDialog.Actions>{props.actions}</MDDialog.Actions>}
    </MDDialog>
  );
};
