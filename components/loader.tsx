import React from "react";
import RichLoader from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="loader center">
      <RichLoader
        type="BallTriangle"
        color="#00BFFF"
        height={100}
        width={100}
        style={{
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
