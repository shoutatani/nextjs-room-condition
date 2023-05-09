import axios from "axios";
import { useEffect, useState } from "react";
import { Loader } from "../components/loader";
import { RoomConditionDataType } from "../interfaces/common";

export const FetchAirConditionData = (props) => {
  const [roomConditionData, setRoomConditionData] =
    useState<RoomConditionDataType>(null);

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

  if (!roomConditionData) {
    return <Loader />;
  }

  return props.render({
    measuring_time: roomConditionData.measuring_time,
    temperature: roomConditionData.temperature,
    pressure: roomConditionData.pressure,
    humidity: roomConditionData.humidity,
    co2_concentration: roomConditionData.co2_concentration,
  });
};
