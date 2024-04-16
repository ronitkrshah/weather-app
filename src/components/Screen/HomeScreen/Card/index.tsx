import { SurfaceContainer } from "src/components/Common/Containers/SurfaceContainer";
import { CardItem } from "./CardItem";
import { useStore } from "src/store";

export const Card = () => {
  const weatherData = useStore((state) => state.weatherData);

  return (
    weatherData && (
      <SurfaceContainer>
        <CardItem
          icon="air"
          title={`${weatherData.current.wind_kph} Km/h`}
          subtitle="WindSpeed"
        />
        <CardItem
          icon="water-drop"
          title={`${weatherData.current.humidity}%`}
          subtitle="Humidity"
        />
        <CardItem
          icon="visibility"
          title={`${weatherData.current.vis_km} Km`}
          subtitle="Visibility"
        />
      </SurfaceContainer>
    )
  );
};
