import { SurfaceContainer } from "src/components/Common/Containers/SurfaceContainer";
import { CardItem } from "./CardItem";

export const Card = () => {
  return (
    <SurfaceContainer>
      <CardItem icon="air" title="22 Km/h" subtitle="WindSpeed" />
      <CardItem icon="water-drop" title="62%" subtitle="Humidity" />
      <CardItem icon="visibility" title="10 Km" subtitle="Visibility" />
    </SurfaceContainer>
  );
};
