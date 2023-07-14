// import React from "react";
import farmPic from "../assets/images/Group 456.jpg";
import gifts from "../assets/images/gifts.png";
const ImageDisplay = () => {
  return (
    <div className='overflow-hidden'>
      <div className='mt-2'>
        <img
          src={farmPic}
          alt='Image 1'
          style={{
            height: "auto",
            width: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div className='mt-4 mb-4'>
        <div style={{ position: "relative" }}>
          <img
            src={gifts}
            alt='Image 2'
            style={{ height: "auto", width: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
