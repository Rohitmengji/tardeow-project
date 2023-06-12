import { Swiper, SwiperSlide } from "swiper/react";
import Card from "react-bootstrap/Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faSearch,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

// import required modules
import { Autoplay, Keyboard, Navigation, Mousewheel } from "swiper";

function Cards() {
  const products = [
    {
      name: "A2 Desi Cow Ghee",
      rating: 5,
      price: "₹650",
      image: "../assets/Ghee_1Ltr_bottlee.jpg",
    },
    {
      name: "Honey",
      rating: 4,
      price: "₹500",
      image: "../assets/Honey_1kg_Bottlee.jpg",
    },
    {
      name: "Cocunut Oil",
      rating: 4.5,
      price: "₹290",
      image: "../assets/coconut-oil.webp",
    },
    {
      name: "Groundnut Oil",
      rating: 4.5,
      price: "₹290",
      image: "../assets/groundnutoil.jpg",
    },
    {
      name: "Mustard Oil",
      rating: 4,
      price: "₹290",
      image: "../assets/mustard-oil.webp",
    },
    {
      name: "Groundnut Oil",
      rating: 4,
      price: "₹290",
      image: "../assets/groundnutoil.jpg",
    },

    // Add more products here
    // ...
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <FontAwesomeIcon style={{ color: "#dc970c " }} key={i} icon={faStar} />
      );
    }
    return stars;
  };
  return (
    <div className='container mb-5'>
      <>
        <h2 className='text-center brown mb-4'>Our Flagship Products</h2>
      </>
      <Swiper
        mousewheel={true}
        navigation={true}
        slidesPerView={2} // Display two cards per slide
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        breakpoints={{
          720: {
            slidesPerView : 3
          }
        }}
        modules={[Keyboard, Navigation, Autoplay, Mousewheel]}
        className='mySwiper'
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Card className='mx-2'>
              <Card.Body className='d-flex flex-column justify-content-between'>
                <div className='text-center'>
                  <Card.Img
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    variant='top'
                    src={product.image}
                    alt={product.name}
                  />
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{renderStars(product.rating)}</Card.Text>
                  <Card.Text>Price: {product.price}</Card.Text>
                </div>
                <div className='overlay'>
                  <FontAwesomeIcon icon={faSearch} className='icon' />
                  <FontAwesomeIcon icon={faHeart} className='icon' />
                  <FontAwesomeIcon icon={faShoppingCart} className='icon' />
                </div>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Cards;
