import { SearchBox } from "src/components/Common/Search";
import { useEffect, useState } from "react";
import { AutoSuggestionResponse } from "src/types/api/AutoSuggestionResponse";
import { SearchList } from "./SearchList";
import { ActivityIndicator } from "react-native-paper";
import { ToastAndroid } from "react-native";
import { weatherApi } from "src/api/weatherApi";

export const AutoCompleteSearch = () => {
  // States
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState<
    AutoSuggestionResponse[] | null
  >(null);

  // Effect
  useEffect(() => {
    // IIFE
    (async function () {
      setLoading(true);

      if (query.length > 2) {
        // Fetch Auto complete suggestions
        const { data, error } = await weatherApi.getSearchSuggestions(query);

        if (data) {
          setSuggestions(data);
        } else {
          ToastAndroid.show(
            error?.message || "Something Went Wrong",
            ToastAndroid.SHORT,
          );
        }
      }
      setLoading(false);
    })();
  }, [query]);

  // Render
  return (
    <>
      <SearchBox setValue={setQuery} placeholder="Search Places" />

      {loading ? (
        <ActivityIndicator size={"large"} style={{ marginTop: 20 }} />
      ) : (
        suggestions && <SearchList data={suggestions} />
      )}
    </>
  );
};
