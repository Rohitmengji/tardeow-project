// import React from "react";

const BulkOrderSection = () => {
  return (
    <div className="mb-5"
      style={{
        position: "relative",
        // height: "55vh",
        width: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img
        src='../../public/assets/Group 601.png'
        alt='Background'
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "65%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#714547", position: "relative" }}>
          Looking for Bulk Orders?
        </h2>
        <button
          className='btn btn-success mt-2'
          style={{ backgroundColor: "#456c33", marginRight: "13rem" }}
        >
          Drop a Mail
        </button>
      </div>
    </div>
  );
};

export default BulkOrderSection;
