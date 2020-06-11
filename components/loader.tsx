import React from "react";
import RichLoader from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="loader center" style={{textAlign: "center", marginTop: "150px"}}>
      <RichLoader
        type="BallTriangle"
        color="#00BFFF"
        height={100}
        width={100}
        styles={{
          margin: "100px auto",
        }}
      />
    </div>
  );
};
