"use client";

import React from "react";
import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="loader center">
      <ThreeDots
        color="#00BFFF"
        height={100}
        width={100}
        wrapperStyle={{
          position: "absolute",
          display: "block",
          left: "50%",
          top: "50%",
          marginLeft: "-50px",
          marginTop: "-50px",
        }}
      />
    </div>
  );
};
