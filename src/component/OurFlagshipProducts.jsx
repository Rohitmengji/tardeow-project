import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const OurFlagshipProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

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

  // Create an empty array to store the product chunks
  const productChunks = [];

  // Start a loop that iterates over the products array
  for (let i = 0; i < products.length; i += 3) {
    // In each iteration, slice the products array to get a chunk of three products
    // The 'i' variable represents the starting index of the chunk, and 'i + 3' represents the ending index (exclusive)
    const chunk = products.slice(i, i + 3);

    // Push the chunk of products into the productChunks array
    productChunks.push(chunk);
  }

  // After the loop, the productChunks array will contain all the chunks of products, each containing three products

  return (
    <div className='container mb-5'>
      <h2 className='text-center mb-4 brown'>Our Flagship Products</h2>
      <Carousel indicators={true} interval={null}>
        {productChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className='row justify-content-center'>
              {chunk.map((product, i) => (
                <div className='col-sm-6 col-md-4 col-lg-3 mb-3' key={i}>
                  <div className='card'>
                    <img
                      style={{
                        height: "250px",
                        marginTop: "5px",
                        objectFit: "contain",
                      }}
                      src={product.image}
                      className='card-img-top'
                      alt={product.name}
                    />
                    <div className='card-body'>
                      <h5 className='card-title text-center'>{product.name}</h5>
                      <div className='card-text text-center'>
                        {Array.from({ length: product.rating }, (_, index) => (
                          <span key={index} className='text-warning'>
                            &#9733;
                          </span>
                        ))}
                      </div>
                      <p className='card-text text-center'>{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className='text-center mt-3'>
        <ol className='carousel-indicators'>
          {productChunks.map((chunk, index) => (
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
