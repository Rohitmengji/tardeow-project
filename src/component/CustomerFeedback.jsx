// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/Feedback.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper Core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// Install Swiper modules
SwiperCore.use([Pagination]);

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
        <div className='c'>
          <div className='text-center mb-4'>
            <h2 className='mb-3 mt-3 text-white'>What Our Customers Say</h2>
          </div>
          <div className='container  col-lg-8 col-md-7 flex-column  col-sm-12  mb-5'>
            <Swiper
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              {feedbackData.map((feedback, index) => (
                <SwiperSlide key={index}>
                  <div className='feedbackmsg '>
                    <div className='qoute-img'>
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
                    </div>
                    <div className='feedback-msg'>
                      <p
                        className='text-wrap text-truncate'
                        style={{
                          fontSize: "20px",
                          fontFamily: "sans-serif",
                          wordSpacing: "2px",
                        }}
                      >
                        {feedback.message}
                        <hr className='feedbackLine' />
                      </p>
                    </div>
                    <div className='feedback-author'>
                      <p
                        style={{
                          fontWeight: "bold",
                          color: "#456c33",
                          marginBottom: "32px",
                        }}
                      >
                        {feedback.author}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
