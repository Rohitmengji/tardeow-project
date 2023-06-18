import { useState } from "react";
import "../styles/OurFocus.css";

const CircleCard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
  };

  const circleCards = [
    {
      name: "Traditional",
      imageSrc: "../assets/Group 593.png",
      hoverImageSrc: "../assets/Group 594.png",
    },
    {
      name: "Natural",
      imageSrc: "../assets/Group 595.png",
      hoverImageSrc: "../assets/Group 596.png",
    },
    {
      name: "No Refining",
      imageSrc: "../assets/Group 597.png",
      hoverImageSrc: "../assets/Group 598.png",
    },
  ];

  return (
    <div className='our-focus-container p-4 mb-5'>
      <h2 className='mb-4 mt-4 text-center brown'>Our Focus</h2>

      <div className='row '>
        {circleCards.slice(0, 3).map((circleCard, index) => (
          <div
            key={index}
            className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center'
            onMouseEnter={() => handleCardMouseEnter(index)}
            onMouseLeave={handleCardMouseLeave}
          >
            <div
              className={`circle-card${
                hoveredCard === index ? " hovered" : ""
              }`}
            >
              <div className='circle dotted-border'>
                <img
                  src={
                    hoveredCard === index
                      ? circleCard.hoverImageSrc
                      : circleCard.imageSrc
                  }
                  alt={circleCard.name}
                  className='circle-logo'
                />
              </div>
              <h6 className='circle-name fw-bold'>{circleCard.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleCard;
