import axios from "axios";
import { useEffect, useState } from "react";
import { RoomConditionDataType } from "./interfaces";
import { Loader } from "./loader";
import { RoomCondition } from "./room_condition";

export const RoomConditionData = () => {
  const [roomConditionData, setRoomConditionData] = useState<
    RoomConditionDataType
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get("/api/room_condition")
        .then(function (response) {
          return response.data as RoomConditionDataType[];
        })
        .catch(function (error) {
          console.log("error = ", error);
        });
      if (response) {
        setRoomConditionData(response[response.length - 1]);
      }
    };
    fetchData();
  }, []);

  if (roomConditionData) {
    return (
      <RoomCondition
        measuring_time={roomConditionData.measuring_time}
        temperature={roomConditionData.temperature}
        pressure={roomConditionData.pressure}
        humidity={roomConditionData.humidity}
        co2_concentration={roomConditionData.co2_concentration}
      />
    );
  }

  return (
    <Loader />
  );
};
