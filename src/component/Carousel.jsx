import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Carousel.css";

const CarouselComponent = () => {
  return (
    <div className='pr-6'>
      <div>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          emulateTouch={false}
          showIndicators={true}
          className='carousel-dots'
        >
          <div className='mb-5 mt-3 '>
            <img
              style={{
                height: "300px",
              }}
              src='../assets/products_1.png'
              alt='Products'
              className='carousel-image'
            />
          </div>
          <div className='mt-3'>
            <img
              style={{ height: "300px" }}
              src='../assets/products_1.png'
              alt='Products'
              className='carousel-image'
            />
          </div>

          <div className='mt-3'>
            <img
              style={{ height: "300px" }}
              src='../assets/products_1.png'
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
