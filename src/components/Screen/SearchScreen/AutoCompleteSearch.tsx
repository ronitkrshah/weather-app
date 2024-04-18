import { SearchBox } from "src/components/Common/Search";
import { useState } from "react";
import { useFetchData } from "src/hooks/useFetchData";
import { AutoSuggestionResponse } from "src/types/api/AutoSuggestionResponse";
import { SearchList } from "./SearchList";
import { ActivityIndicator } from "react-native-paper";
import { ToastAndroid } from "react-native";

export const AutoCompleteSearch = () => {
  const [query, setQuery] = useState("");

  // Fetch Auto complete suggestions
  const response = useFetchData("/search.json", query);

  // Actual Search suggestions data from api response
  const data: null | AutoSuggestionResponse[] = response.data;

  // Show Error as Toast Message
  if (response.error) {
    ToastAndroid.show(response.error.message, ToastAndroid.SHORT);
  }

  // Render
  return (
    <>
      <SearchBox setValue={setQuery} placeholder="Search Places" />

      {/* Basically if loading is true don't show old search suggestions */}
      {response.loading ? (
        <ActivityIndicator style={{ marginTop: 20 }} size={"large"} />
      ) : (
        /* If Loading is false and we have the data then show Search list */
        data && <SearchList data={data} />
      )}
    </>
  );
};
