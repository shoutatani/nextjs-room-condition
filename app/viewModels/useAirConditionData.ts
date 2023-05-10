export interface RoomConditionDataType {
  measuring_time?: string;
  temperature?: string;
  pressure?: string;
  humidity?: string;
  co2_concentration?: string;
}

export const useAirConditionData = () => {
  const fetchRoomConditionData = async () => {
    const response = await fetch(process.env.API_URL, {
      headers: {
        "x-api-key": process.env.LAMBDA_API_KEY,
      },
      cache: "no-store",
    });

    const json = await response.json();
    const roomConditionData = JSON.parse(json.body) as RoomConditionDataType[];

    return roomConditionData;
  };

  const fetchLatestRoomConditionData = async () => {
    const roomConditionData = await fetchRoomConditionData();
    return roomConditionData[roomConditionData.length - 1];
  };

  return { fetchRoomConditionData, fetchLatestRoomConditionData };
};
