import "../styles/OurFocus.css";
import Traditional from '../assets/images/Group593.png'
import hoverTraditional from '../assets/images/Group594.png'
import natural from '../assets/images/Group595.png'
import hoverNatural from '../assets/images/Group596.png'
import refine from '../assets/images/Group597.png' 
import hoverRefine from "../assets/images/Group598.png";



const CircleCard = () => {
  const circleCards = [
    {
      name: "Traditional",
      imageSrc: Traditional,
      hoverImageSrc: hoverTraditional,
    },
    {
      name: "Natural",
      imageSrc: natural,
      hoverImageSrc: hoverNatural,
    },
    {
      name: "No Refining",
      imageSrc: refine,
      hoverImageSrc: hoverRefine,
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
