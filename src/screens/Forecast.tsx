import { SurfaceContainer } from "src/components/Common/Containers/SurfaceContainer";
import { ForeCastData } from "src/components/Screen/Forecast/ForeCastData";
import { Header } from "src/components/Shared/Header";
import { BaseLayout } from "src/layouts/Base";
import { useStore } from "src/store";

export const ForecastScreen = () => {
  // Weather Data
  const weatherData = useStore((state) => state.weatherData);

  // Return if weather is null
  if (!weatherData) return null;

  // Render
  return (
    <BaseLayout type="SCROLL_VIEW">
      {/* Header */}
      <Header showDate={false} />

      {weatherData.forecast.forecastday.map((item, i) => (
        <SurfaceContainer
          style={{ padding: 0, overflow: "hidden" }}
          key={i}
          mode="flat"
        >
          <ForeCastData data={item} />
        </SurfaceContainer>
      ))}
    </BaseLayout>
  );
};
