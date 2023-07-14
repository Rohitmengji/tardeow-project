import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Carousel.css";
import productOne from "../assets/images/products_1.png";

const CarouselComponent = () => {
  return (
    <div className='pr-2'>
      <div>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          emulateTouch={true}
          // autoplay={true}
          // interval={3000}
          showIndicators={true}
          swipeable={true}
          className='carousel-dots'
        >
          <div className='mb-5'>
            <img
              style={{
                height: "300px",
              }}
              src={productOne}
              alt='Products'
              className='carousel-image'
            />
          </div>
          <div>
            <img
              src={productOne}
              style={{ height: "300px" }}
              alt='Products'
              className='carousel-image'
            />
          </div>

          <div>
            <img
              src={productOne}
              style={{ height: "300px" }}
              alt='Products'
              className='carousel-image'
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
