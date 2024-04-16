import axios, { AxiosError } from "axios";
import { WEATHER_API_KEY } from "src/constants";
import { WeatherResponse } from "src/types/api/WeatherResponse";

class WeatherApi {
  // Get weather data
  async getWeatherData(query: string) {
    let error: AxiosError | null = null;
    let data: WeatherResponse | null = null;

    try {
      const response = await axios.get("/forecast.json", {
        baseURL: "https://api.weatherapi.com/v1",
        params: {
          key: WEATHER_API_KEY,
          q: query,
          aqi: "no",
          alerts: "no",
        },
      });

      data = response.data;
    } catch (err) {
      error = err as AxiosError;
    } finally {
      return { data, error };
    }
  }
}

export const weatherApi = new WeatherApi();
