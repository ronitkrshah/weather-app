import axios, { AxiosError, AxiosInstance } from "axios";
import { WEATHER_API_KEY } from "src/constants";
import { AutoSuggestionResponse } from "src/types/api/AutoSuggestionResponse";
import { WeatherResponse } from "src/types/api/WeatherResponse";

class WeatherApi {
  private weather: AxiosInstance;

  constructor() {
    this.weather = axios.create({
      baseURL: "https://api.weatherapi.com/v1",
      params: {
        key: WEATHER_API_KEY,
      },
    });
  }

  // Get weather data
  async getWeatherData(query: string) {
    let error: AxiosError | null = null;
    let data: WeatherResponse | null = null;

    try {
      const response = await this.weather.get("/forecast.json", {
        params: {
          days: 3,
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

  // Get Search Suggestions data
  async getSearchSuggestions(query: string) {
    let error: AxiosError | null = null;
    let data: AutoSuggestionResponse[] | null = null;

    try {
      const response = await this.weather.get("/search.json", {
        params: {
          q: query,
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
