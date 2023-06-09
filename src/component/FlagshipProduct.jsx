import { Swiper, SwiperSlide } from "swiper/react";
import Card from "react-bootstrap/Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faSearch,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/flagship.css";

// import required modules
import { Autoplay, Keyboard, Navigation } from "swiper";
// import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { ProductContext } from "../Store/ProductContext";
import ghee from '../assets/images/Ghee_1Ltr_bottlee.jpg'
import honey from "../assets/images/Honey_1kg_Bottlee.jpg";
import coconutOil from "../assets/images/coconut-oil.webp";
import groundNut from "../assets/images/groundnutoil.jpg";
import mustardOil from "../assets/images/mustard-oil.webp";

function FlagshipProduct() {
  const products = [
    {
      name: "Desi Cow Ghee",
      rating: 5,
      price: "₹650",
      image: ghee,
    },
    {
      name: "Honey",
      rating: 4,
      price: "₹500",
      image: honey,
    },
    {
      name: "Cocunut Oil",
      rating: 4.5,
      price: "₹290",
      image: coconutOil,
    },
    {
      name: "Groundnut Oil",
      rating: 4.5,
      price: "₹290",
      image: groundNut
    },
    {
      name: "Mustard Oil",
      rating: 4,
      price: "₹290",
      image: mustardOil
    },
    {
      name: "Groundnut Oil",
      rating: 4,
      price: "₹290",
      image: groundNut,
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
    <div className='container mb-4'>
      <>
        <h2 className='text-center font-change-h mb-4'>
          Our Flagship Products
        </h2>
      </>
      <Swiper
        mousewheel={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          720: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
          424: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        }}
        modules={[Keyboard, Navigation, Autoplay]}
        className='mySwiper'
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div>
              <Card
                className='mx-3 content'
                border='0'
                style={{ boxShadow: "revert-layer" }}
              >
                <Card.Body className='d-flex flex-column  flex items-center justify-content-center relative'>
                  <div className='content-overlay'>
                    <div className='middle flex align-items-center justify-content-center gap-3'>
                      <Link to={"/"}>
                        <span
                          className='bg-white d-flex align-items-center justify-center px-2 py-2 text-black'
                          style={{ borderRadius: "50px" }}
                        >
                          <FontAwesomeIcon icon={faSearch} />
                        </span>
                      </Link>
                      <Link to={"/"}>
                        <span className='bg-white d-flex items-center justify-content-center px-2 py-2 text-black rounded-circle'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            height='1em'
                            viewBox='0 0 512 512'
                          >
                            <path d='M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z' />
                          </svg>
                        </span>
                      </Link>
                      <Link to={"/productDetails"}>
                        <span className='bg-white flex align-items-center justify-content-center px-2 py-1 text-black rounded-circle'>
                          <FontAwesomeIcon icon={faCartShopping} />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <Card.Img
                    style={{
                      width: "100%",
                      height: "210px",
                      // objectFit: "cover",
                    }}
                    variant='top'
                    src={product.image}
                    alt={product.name}
                  />
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{renderStars(product.rating)}</Card.Text>
                  <Card.Text style={{ marginBottom: "2px" }}>
                    Price: {product.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FlagshipProduct;
