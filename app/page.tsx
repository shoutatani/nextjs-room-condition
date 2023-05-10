import { Suspense } from "react";
import { RoomCondition } from "../components/roomCondition";
import { useAirConditionData } from "./viewModels/useAirConditionData";
import Loading from "./loading";

export default async function Home() {
  const { fetchLatestRoomConditionData } = useAirConditionData();

  const roomConditionData = await fetchLatestRoomConditionData();

  const { measuring_time, temperature, pressure, humidity, co2_concentration } =
    roomConditionData;

  return (
    <Suspense fallback={<Loading />}>
      <RoomCondition
        measuring_time={measuring_time}
        temperature={temperature}
        pressure={pressure}
        humidity={humidity}
        co2_concentration={co2_concentration}
      />
    </Suspense>
  );
}
