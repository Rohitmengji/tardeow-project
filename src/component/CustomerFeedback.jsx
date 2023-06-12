// import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/Feedback.css'

const CustomerFeedback = () => {
  const feedbackData = [
    {
      message:
        "Great products, worth buying. Its pure and we could easily differentiate.",
      author: "Arjun S H, Bengaluru",
    },
    {
      message: "Im extremely satisfied with the quality.",
      author: "Harish, Mumbai",
    },
    {
      message: "Highly recommend this product to everyone.",
      author: "Sudhir, Kolkata",
    },
    {
      message: "Great value for the price.",
      author: "Kiran, Pune",
    },
    {
      message: "Excellent customer service and fast delivery.",
      author: "Kishore, Hyderabad",
    },
  ];

  return (
    <div className='customer-feedback-container box'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-11'>
            <div className='text-center mb-4'>
              <h2 className='mb-3 mt-3 text-white'>What Our Customers Say</h2>
            </div>
            <div
              className="container w-50 mb-4"
              style={{
                borderRadius: "30px",
                background: "#f5f6f6",
                // padding: "0.5rem",
                textAlign: "center",
              }}
            >
              <Carousel
                stopOnHover={true}
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                infiniteLoop={false}
                autoPlay={true}
                interval={5000}
                swipeable={true}
                emulateTouch={true}
                responsive={{
                  0: {
                    // breakpoint for mobile devices
                    partialVisibilityGutter: 40,
                    slidesToShow: 1,
                  },
                  320: {
                    slidesToShow: 1,
                  },
                  576: {
                    // breakpoint for small devices (e.g., tablets)
                    partialVisibilityGutter: 50,
                    slidesToShow: 2,
                  },
                  992: {
                    // breakpoint for medium devices (e.g., laptops)
                    partialVisibilityGutter: 80,
                    slidesToShow: 3,
                  },
                }}
              >
                {feedbackData.map((feedback, index) => (
                  <div key={index}  className='feedbackmsg'>
                    <img
                      className='d-block'
                      src='../assets/Group 54.png'
                      alt='Quote Icon'
                      style={{
                        objectFit: "contain",
                        height: "80px",
                        width: "58px",
                      }}
                    />

                    <p
                      className='text-wrap text-truncate'
                      style={{
                        fontSize: "20px",
                        fontFamily: "sans-serif",
                        wordSpacing: "2px",
                      }}
                    >
                      {feedback.message}
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#456c33",
                        margin: "35px auto",
                      }}
                    >
                      <hr />
                      {feedback.author}
                    </p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
