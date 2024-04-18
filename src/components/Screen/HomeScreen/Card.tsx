import { SurfaceContainer } from "src/components/Common/Containers/SurfaceContainer";
import { Card as CardItem } from "src/components/Common/Card";
import { useStore } from "src/store";

export const Card = () => {
  const weatherData = useStore((state) => state.weatherData);

  return (
    weatherData && (
      <SurfaceContainer>
        <CardItem
          icon="weather-windy"
          title={`${weatherData.current.wind_kph} Km/h`}
          subtitle="WindSpeed"
        />
        <CardItem
          icon="water-outline"
          title={`${weatherData.current.humidity}%`}
          subtitle="Humidity"
        />
        <CardItem
          icon="eye"
          title={`${weatherData.current.vis_km} Km`}
          subtitle="Visibility"
        />
      </SurfaceContainer>
    )
  );
};
