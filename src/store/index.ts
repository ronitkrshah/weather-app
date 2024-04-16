import { WeatherResponse } from "src/types/api/WeatherResponse";
import { create } from "zustand";

type State = {
  weatherData: WeatherResponse | null;
  setWeatherData: (data: WeatherResponse) => void;
};

export const useStore = create<State>()((set) => ({
  weatherData: null,
  setWeatherData: (data) => set(() => ({ weatherData: { ...data } })),
}));
