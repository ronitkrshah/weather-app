import { FlatList, StyleSheet, View } from "react-native";
import { AutoSuggestionResponse } from "src/types/api/AutoSuggestionResponse";
import { SearchItem } from "./SearchItem";
import { Divider } from "react-native-paper";

type SearchListProps = {
  data: Array<AutoSuggestionResponse>;
};

export const SearchList = ({ data }: SearchListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => <SearchItem data={item} key={item.id} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.7)",
    overflow: "hidden",
  },
});
