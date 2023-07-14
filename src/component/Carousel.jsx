import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Carousel.css";

const CarouselComponent = () => {
  return (
    <div className='pr-2'>
      <div>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          emulateTouch={false}
          autoplay={true}
          interval={3000}
          showIndicators={true}
          swipeable={true}
          className='carousel-dots'
        >
          <div className='mb-5'>
            <img
              style={{
                height: "300px",
              }}
              src='../assets/images/products_1.png'
              alt='Products'
              className='carousel-image'
            />
          </div>
          <div>
            <img
              style={{ height: "300px" }}
              src='../assets/images/products_1.png'
              alt='Products'
              className='carousel-image'
            />
          </div>

          <div>
            <img
              style={{ height: "300px" }}
              src='../assets/images/products_1.png'
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
