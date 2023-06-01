// import React from "react";
import "../styles/OurFocus.css";

const CircleCard = () => {
  return (
    <div
      className='container-fluid our-focus-container'
      style={{ backgroundColor: "#edf0f5" }}
    >
      <h2 className='mb-3 mt-4 text-center brown'>Our Focus</h2>

      <div className='d-flex justify-content-around '>
        <div className='circle-card'>
          <div className='circle dotted-border'>
            <img
              src='../assets/Group 593.png'
              alt='Traditional'
              className='circle-logo'
            />
          </div>
          <h6 className='circle-name'>Traditional</h6>
        </div>

        <div className='circle-card'>
          <div className='circle '>
            <img
              src='../assets/Group 596.png'
              alt='Natural'
              className='circle-logo'
            />
          </div>
          <h6 className='circle-name'>Natural</h6>
        </div>

        <div className='circle-card'>
          <div className='circle '>
            <img
              src='../assets/Group 597.png'
              alt='No Refining'
              className='circle-logo'
            />
          </div>
          <h6 className='circle-name'>No Refining</h6>
        </div>
      </div>
    </div>
  );
};

export default CircleCard;
