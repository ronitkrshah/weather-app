import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Searchbar, useTheme } from "react-native-paper";
import { useDebounce } from "src/hooks/useDebounce";

type SearchBoxProps = {
  placeholder?: string;
  setValue: Dispatch<SetStateAction<string>>;
  debouncedDelay?: number;
};

export const SearchBox = ({
  placeholder,
  setValue,
  debouncedDelay = 700,
}: SearchBoxProps) => {
  // States
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce(query, debouncedDelay);

  // Material You Theme
  const { colors } = useTheme();

  /*
   * Updating state of parent so that parent can handle some sort of things
   */
  useEffect(() => {
    setValue(debouncedValue);
  }, [debouncedValue]);

  return (
    <Searchbar
      placeholder={placeholder}
      placeholderTextColor={"grey"}
      selectionColor={"pink"}
      cursorColor={colors.primary}
      style={{ backgroundColor: colors.surface }}
      value={query}
      onChangeText={(e) => setQuery(e)}
    />
  );
};
