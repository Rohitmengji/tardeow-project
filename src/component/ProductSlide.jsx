import { Swiper, SwiperSlide } from "swiper/react";
import Card from "react-bootstrap/Card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Autoplay, Keyboard, Navigation } from "swiper";

function ProductSlide() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const products = [
    {
      name: "Desi Cow Ghee",
      rating: 5,
      price: "₹650",
      image: "/assets/Ghee_1Ltr_bottlee.jpg",
    },
    {
      name: "Honey",
      rating: 4,
      price: "₹500",
      image: "/assets/Honey_1kg_Bottlee.jpg",
    },
    {
      name: "Cocunut Oil",
      rating: 4.5,
      price: "₹290",
      image: "/assets/coconut-oil.webp",
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
        slidesPerView={2}
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
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          820: {
            slidesPerView: 3,
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
            <div
              className='flex flex-wrap '
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Card
                className='mx-3 content'
                border='0'
                style={{ boxShadow: "revert-layer" }}
              >
                <Card.Body className='d-flex flex-column justify-content-between flex items-center justify-center relative'>
                  <div className='content-overlay'></div>

                  <Card.Img
                    style={{
                      width: "100%",
                      height: "230px",
                      objectFit: "cover",
                    }}
                    variant='top'
                    src={product.image}
                    alt={product.name}
                    loading='lazy'
                  />
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{renderStars(product.rating)}</Card.Text>
                  <Card.Text style={{ marginBottom: "9px" }}>
                    Price: {product.price}
                  </Card.Text>

                  {hoverIndex === index && (
                    <div className='middle flex align-items-center justify-content-center gap-2'>
                      <span
                        className='bg-white d-flex align-items-center justify-content-center px-2 py-2 text-black'
                        style={{
                          borderRadius: "50px",
                          width: "32px",
                          height: "32px",
                        }}
                      >
                        <img
                          src={"/assets/Icon ionic-ios-search-1.png"}
                          alt='Search Icon'
                          style={{ width: "16px", height: "16px" }}
                        />
                      </span>
                      <span
                        className='bg-white d-flex items-center justify-content-center px-2 py-2 text-black'
                        style={{
                          borderRadius: "50px",
                          width: "32px",
                          height: "32px",
                        }}
                      >
                        <img
                          src='/assets/heartoverlay.png'
                          alt='Heart Icon'
                          style={{ width: "16px", height: "16px" }}
                        />
                      </span>
                      <Link to={"/productDetails"}>
                        <span
                          className='bg-white d-flex items-center justify-content-center px-2 py-2 text-black '
                          style={{
                            borderRadius: "50px",
                            background: "#fff",
                            width: "35px",
                            height: "35px",
                          }}
                        >
                          <img
                            src='/assets/overlaycart.png'
                            alt='Cart Icon'
                            style={{ width: "16px", height: "17px" }}
                          />
                        </span>
                      </Link>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSlide;

// import { Swiper, SwiperSlide } from "swiper/react";
// import Card from "react-bootstrap/Card";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faStar,
//   faSearch,
//   faCartShopping,
// } from "@fortawesome/free-solid-svg-icons";

// import "../styles/styles.css";

// // import required modules
// import { Autoplay, Keyboard, Navigation } from "swiper";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// function ProductSlide() {
//   // const search = "../assets/Icon ionic-ios-search-1.png";
//   // const heartIcon = "../assets/Group 27.png";
//   // const cartIcon = "../assets/Icon feather-shopping-cart-1.png";
//   const [hoverIndex, setHoverIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoverIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoverIndex(null);
//   };
//   const products = [
//     {
//       name: "Desi Cow Ghee",
//       rating: 5,
//       price: "₹650",
//       image: "../assets/Ghee_1Ltr_bottlee.jpg",
//     },
//     {
//       name: "Honey",
//       rating: 4,
//       price: "₹500",
//       image: "../assets/Honey_1kg_Bottlee.jpg",
//     },
//     {
//       name: "Cocunut Oil",
//       rating: 4.5,
//       price: "₹290",
//       image: "../assets/coconut-oil.webp",
//     },
//     {
//       name: "Groundnut Oil",
//       rating: 4.5,
//       price: "₹290",
//       image: "../assets/groundnutoil.jpg",
//     },
//     {
//       name: "Mustard Oil",
//       rating: 4,
//       price: "₹290",
//       image: "../assets/mustard-oil.webp",
//     },
//     {
//       name: "Groundnut Oil",
//       rating: 4,
//       price: "₹290",
//       image: "../assets/groundnutoil.jpg",
//     },

//     // Add more products here
//     // ...
//   ];

//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 0; i < rating; i++) {
//       stars.push(
//         <FontAwesomeIcon style={{ color: "#dc970c " }} key={i} icon={faStar} />
//       );
//     }
//     return stars;
//   };
//   return (
//     <div className='container mb-5'>
//       <>
//         <h2 className='text-center brown mb-4'>Our Flagship Products</h2>
//       </>
//       <Swiper
//         mousewheel={true}
//         slidesPerView={2} // Display two cards per slide
//         keyboard={{
//           enabled: true,
//         }}
//         breakpoints={{
//           720: {
//             slidesPerView: 2,
//           },
//           320: {
//             slidesPerView: 1,
//           },
//           424: {
//             slidesPerView: 2,
//           },
//           767: {
//             slidesPerView: 2,
//           },
//           820: {
//             slidesPerView: 3,
//           },
//           991: {
//             slidesPerView: 3,
//           },
//         }}
//         modules={[Keyboard, Navigation, Autoplay]}
//         className='mySwiper'
//       >
//         {products.map((product, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className='flex flex-wrap '
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <Card
//                 className='mx-3 content'
//                 border='0'
//                 style={{ boxShadow: "revert-layer" }}
//               >
//                 <Card.Body className='d-flex flex-column justify-content-between flex items-center justify-center relative'>
//                   <div className='content-overlay'></div>

//                   <Card.Img
//                     style={{
//                       width: "100%",
//                       height: "230px",
//                       objectFit: "cover",
//                     }}
//                     variant='top'
//                     src={product.image}
//                     alt={product.name}
//                   />
//                   <Card.Title>{product.name}</Card.Title>
//                   <Card.Text>{renderStars(product.rating)}</Card.Text>
//                   <Card.Text style={{ marginBottom: "9px" }}>
//                     Price: {product.price}
//                   </Card.Text>

//                   {hoverIndex === index && (
//                     <div className='middle flex align-items-center justify-content-center gap-2'>
//                       <span
//                         className='bg-white d-flex align-items-center justify-center px-2 py-2 text-black'
//                         style={{ borderRadius: "50px" }}
//                       >
//                         <FontAwesomeIcon
//                           icon={faSearch}
//                           style={{ fill: "#000" }}
//                         />
//                       </span>
//                       <span
//                         className='bg-white d-flex items-center justify-content-center px-2 py-2 text-black'
//                         style={{ borderRadius: "50px" }}
//                       >
//                         <svg
//                           xmlns='http://www.w3.org/2000/svg'
//                           height='1em'
//                           viewBox='0 0 512 512'
//                           style={{ fill: "#000" }}
//                         >
//                           <path
//                             d='M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z'
//                             fill='#000'
//                           />
//                         </svg>
//                       </span>
//                       <Link to={"/productDetails"}>
//                         <span
//                           className='bg-white flex align-items-center justify-content-center px-2 py-1 text-black'
//                           style={{ borderRadius: "50px" }}
//                         >
//                           <FontAwesomeIcon
//                             icon={faCartShopping}
//                             style={{ fill: "#000" }}
//                           />
//                         </span>
//                       </Link>
//                     </div>
//                   )}
//                 </Card.Body>
//               </Card>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default ProductSlide;
