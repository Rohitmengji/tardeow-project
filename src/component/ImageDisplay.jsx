// import React from "react";

const ImageDisplay = () => {
  return (
    <div className='overflow-hidden'>
      <div className='mt-2'>
        <img
          src={"../assets/Group 456.jpg"}
          alt='Image 1'
          style={{ height: "auto", width: "100%" ,maxWidth :'100%', objectFit: "contain" }}
        />
      </div>
      <div className='mt-4 mb-4'>
        <div style={{ position: "relative" }}>
          <img
            src={"../assets/AddExpore Our Unique and Usefull a heading.png"}
            alt='Image 2'
            style={{ height: "auto", width: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
