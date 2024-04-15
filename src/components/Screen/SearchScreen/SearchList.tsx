import { FlatList } from "react-native";
import { AutoSuggestionResponse } from "src/types/api/AutoSuggestionResponse";
import { SearchItem } from "./SearchItem";
import { Divider } from "react-native-paper";

type SearchListProps = {
  data: Array<AutoSuggestionResponse>;
};

export const SearchList = ({ data }: SearchListProps) => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <Divider />}
      renderItem={({ item }) => <SearchItem data={item} key={item.id} />}
    />
  );
};
