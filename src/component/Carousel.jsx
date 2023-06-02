
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4 ,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src='../assets/products_1.png' alt='Products' />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
