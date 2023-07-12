import "../styles/OurFocus.css";

const CircleCard = () => {
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
    <div className='our-focus-container'>
      <h2 className='mt-3 mb-4 focus'>Our Focus</h2>

      <div className='row'>
        {circleCards.slice(0, 3).map((circleCard, index) => (
          <div
            key={index}
            className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center'
          >
            <div className='circle-card'>
              <div className='circle dotted-border'>
                <img
                  src={circleCard.imageSrc}
                  alt={circleCard.name}
                  className='circle-logo'
                />
                <img
                  src={circleCard.hoverImageSrc}
                  alt={circleCard.name}
                  className='circle-hover-logo'
                />
              </div>
              <h5 className='circle-name fw-bold'>{circleCard.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleCard;
