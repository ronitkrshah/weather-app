import { SurfaceContainer } from "src/components/Common/Containers/SurfaceContainer";
import { InfoHint } from "src/components/Common/InfoHint";
import { ForeCastData } from "src/components/Screen/ForecastScreen/ForeCastData";
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

      {/* Info */}
      <InfoHint
        text={
          "The data provided represents average information. Actual " +
          "results may vary."
        }
      />
    </BaseLayout>
  );
};
