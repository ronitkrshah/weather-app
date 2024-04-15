import { SearchBox } from "src/components/Common/Search";
import { useState } from "react";
import { useFetchData } from "src/hooks/useFetchData";
import { AutoSuggestionResponse } from "src/types/api/AutoSuggestionResponse";
import { SearchList } from "./SearchList";
import { ActivityIndicator, Text } from "react-native-paper";

export const AutoCompleteSearch = () => {
  const [query, setQuery] = useState("");

  // Fetch Auto complete suggestions
  const response = useFetchData("/search.json", query);

  // Actual Search suggestions data from api response
  const data: null | AutoSuggestionResponse[] = response.data;

  // Render
  return (
    <>
      <SearchBox setValue={setQuery} placeholder="Search Places" />

      {/* Loading Indicator */}
      {response.loading && <ActivityIndicator size={"large"} />}

      {/* Actual Search suggestions data from api response */}
      {data && <SearchList data={data} />}

      {/* Show Error */}
      {response.error && <Text>{response.error.message}</Text>}
    </>
  );
};
