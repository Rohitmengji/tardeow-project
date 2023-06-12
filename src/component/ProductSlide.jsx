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
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper";

function Cards() {
  const products = [
    {
      name: "A2 Desi Cow Ghee",
      rating: 5,
      price: "₹650",
      image: "../assets/Ghee_1Ltr_bottle.jpg",
    },
    {
      name: "Honey",
      rating: 4,
      price: "₹500",
      image: "../assets/Honey_1kg_Bottle.jpg",
    },
    {
      name: "Cocunut Oil",
      rating: 4.5,
      price: "₹290",
      image: "../assets/Coconut-Oil_1L_Bottle-3.jpg",
    },
    {
      name: "A2 Desi Cow Ghee",
      rating: 5,
      price: "₹650",
      image: "../assets/Ghee_1Ltr_bottle.jpg",
    },
    {
      name: "Honey",
      rating: 4,
      price: "₹500",
      image: "../assets/Honey_1kg_Bottle.jpg",
    },
    {
      name: "Cocunut Oil",
      rating: 4.5,
      price: "₹290",
      image: "../assets/Coconut-Oil_1L_Bottle-3.jpg",
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
        navigation={true}
        slidesPerView={3}
        spaceBetween={10}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 4000,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            pagination: false,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: false,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 45,
            pagination: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
            pagination: false,
          },
        }}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className='mySwiper'
        autoHeight={true}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Card className='mx-2 '>
              <Card.Body className='d-flex flex-column justify-content-between'>
                <div className='text-center'>
                  <Card.Img
                    style={{
                      width: "18rem",
                      maxHeight: "260px",
                      objectFit: "fill",
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
