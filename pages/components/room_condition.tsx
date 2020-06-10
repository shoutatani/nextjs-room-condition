import React from "react";
import { RoomConditionDataType } from "./interfaces";

export const RoomCondition = (props: RoomConditionDataType) => {

  return(
    <div>
      <p>measuring_time: {props.measuring_time}</p>
      <p>temperature: {props.temperature}</p>
      <p>pressure: {props.pressure}</p>
      <p>humidity: {props.humidity}</p>
      <p>co2_concentration: {props.co2_concentration}</p>
    </div>
  );

}