import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay = 600) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // cleanup
    return () => clearTimeout(timeout);
  }, [value]);

  return debouncedValue;
};
