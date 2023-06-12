import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Carousel.css";

const CarouselComponent = () => {
  return (
    <div>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        emulateTouch={false}
        showIndicators={true}
      >
        <div className='mb-5'>
          <img
            style={{ height: "359px" }}
            src='../assets/products_1.png'
            alt='Products'
            className='carousel-image'
          />
        </div>
        <div>
          <img
            src=''
            alt='Products'
            className='carousel-image'
          />
        </div>
        <div>
          <img
            src=''
            alt='Products'
            className='carousel-image'
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
