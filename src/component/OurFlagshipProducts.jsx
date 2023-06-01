// import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/FlagshipProduct.css";

const OurFlagshipProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const products = [
    {
      name: "A2 Desi Cow Ghee",
      rating: 5,
      price: "₹600",
      image: "../assets/Ghee_1Ltr_bottle.jpg",
    },
    {
      name: "Product 2",
      rating: 4,
      price: "$25.99",
      image: "../assets/Honey_1kg_Bottle.jpg",
    },
    {
      name: "Product 3",
      rating: 4.5,
      price: "$29.99",
      image: "../assets/Coconut-Oil_1L_Bottle-3.jpg",
    },
    // Add two more products here
    {
      name: "Product 4",
      rating: 4.5,
      price: "$39.99",
      image: "../assets/product4.jpg",
    },
    {
      name: "Product 5",
      rating: 4,
      price: "$49.99",
      image: "../assets/product5.jpg",
    },
    {
      name: "Product 6",
      rating: 2,
      price: "$29.99",
      image: "../assets/product6.jpg",
    },
    {
      name: "Product 7",
      rating: 5,
      price: "$29.99",
      image: "../assets/product7.jpg",
    },
    {
      name: "Product 8",
      rating: 6,
      price: "$29.99",
      image: "../assets/product8.jpg",
    },
    {
      name: "Product 9",
      rating: 4,
      price: "$60.99",
      image: "../assets/product9.jpg",
    },
  ];

  // Split the products into chunks of three for each slide
  //   const productChunks = [];
  //   for (let i = 0; i < products.length; i += 3) {
  //     productChunks.push(products.slice(i, i + 3));
  //   }

  //   return (
  //     <div className='container mb-5'>
  //       <h2 className='text-center mb-4 brown'>Our Flagship Products</h2>
  //       <Carousel indicators={true}>
  //         {productChunks.map((chunk, index) => (
  //           <Carousel.Item key={index}>
  //             <div className='row justify-content-around'>
  //               {chunk.map((product, i) => (
  //                 <div className='col-sm-6 col-md-6 col-lg-3 mb-3' key={i}>
  //                   <div
  //                     className='card'
  //                     style={{
  //                       width: "300px",
  //                       height: "320px",
  //                       boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.2)",
  //                     }}
  //                   >
  //                     <div className='card-body'>
  //                       <img
  //                         src={product.image}
  //                         className='card-img-top'
  //                         alt={product.name}
  //                         style={{
  //                           height: "210px",
  //                           // width: "200px",
  //                           objectFit: "cover",
  //                         }}
  //                       />
  //                       <h5 className='card-title'>{product.name}</h5>
  //                       <div className='card-text'>
  //                         {Array.from({ length: product.rating }, (_, index) => (
  //                           <span key={index} className='text-warning'>
  //                             &#9733;
  //                           </span>
  //                         ))}
  //                       </div>
  //                       <p className='card-text'>{product.price}</p>
  //                     </div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           </Carousel.Item>
  //         ))}
  //       </Carousel>

  //       {/* if user clicks on dot to move slides */}
  //       <div className='text-center mt-3'>
  //         <ol className='carousel-indicators'>
  //           {Array.from({ length: productChunks.length }, (_, index) => (
  //             <li
  //               key={index}
  //               onClick={() => handleDotClick(index)}
  //               className={index === activeIndex ? "active" : ""}
  //             ></li>
  //           ))}
  //         </ol>
  //       </div>
  //     </div>
  //   );
  // };

  // export default OurFlagshipProducts;

  // Split the products into chunks of three for each slide
  const productChunks = [];
  for (let i = 0; i < products.length; i += 3) {
    productChunks.push(products.slice(i, i + 3));
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-center mb-4 brown'>Our Flagship Products</h2>
      <Carousel indicators={true} interval={null}>
        {productChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className='row justify-content-around'>
              {chunk.map((product, i) => (
                <div className='col-sm-6 col-md-6 col-lg-3 mb-3' key={i}>
                  <div
                    className='card'
                    style={{
                      width: "300px",
                      height: "320px",
                      boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div className='card-body'>
                      <img
                        src={product.image}
                        className='card-img-top'
                        alt={product.name}
                        style={{
                          height: "210px",
                          // width: "200px",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className='card-title'>{product.name}</h5>
                      <div className='card-text'>
                        {Array.from({ length: product.rating }, (_, index) => (
                          <span key={index} className='text-warning'>
                            &#9733;
                          </span>
                        ))}
                      </div>
                      <p className='card-text'>{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* if user clicks on dot to move slides */}
      <div className='text-center mt-3'>
        <ol className='carousel-indicators'>
          {Array.from({ length: productChunks.length }, (_, index) => (
            <li
              key={index}
              onClick={() => handleDotClick(index)}
              className={index === activeIndex ? "active" : ""}
            ></li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default OurFlagshipProducts;