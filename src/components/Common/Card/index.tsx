import { ViewStyle } from "react-native";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

type CardItemProps = {
  icon: string;
  title: string;
  subtitle: string;
  containerStyle?: ViewStyle;
};

export const Card = ({
  icon,
  title,
  subtitle,
  containerStyle,
}: CardItemProps) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <MaterialIcons name={icon} size={32} />

      <View>
        <Text variant="titleMedium" style={styles.title}>
          {title}
        </Text>
        <Text variant="labelSmall" style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  title: {
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "gray",
    fontWeight: "normal",
  },
});
