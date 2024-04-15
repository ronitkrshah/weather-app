import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { WEATHER_API_KEY } from "src/constants";

export const useFetchData = (endpoint: string, query: string, params = {}) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>();

  useEffect(() => {
    /*
     * Don't make api rquests if query length less than 3
     */
    if (query.length > 2) {
      (async function () {
        try {
          setError(null);
          setLoading(true);

          const response = await axios.get(endpoint, {
            baseURL: "https://api.weatherapi.com/v1",
            params: {
              key: WEATHER_API_KEY,
              q: query,
              ...params,
            },
          });

          setData(response.data);
        } catch (error) {
          setError(error as AxiosError);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [query]);

  return { data, loading, error };
};
