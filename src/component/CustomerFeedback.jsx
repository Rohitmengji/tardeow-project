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
import qouteIcon from "../assets/images/Group 54.png";

const CustomerFeedback = () => {
  const feedbackData = [
    {
      message:
        "Great products, worth buying.<br> Its pure and we could easily differentiate.",
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
    <div className='container-fluid mb-4'>
      <div className='customer-feedback-container'>
        <div className='text-center mb-4'>
          <h2 className='mb-3 mt-3 text-white font-change-h'>
            What Our Customers Says
          </h2>
        </div>
        <div style={{ maxWidth: "777px", }} className='mb-5 container'>
          <Swiper
            // pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {feedbackData.map((feedback, index) => {
              return (
                <SwiperSlide
                  key={index}
                  style={{ maxHeight: "181px", borderRadius: "17px" }}
                >
                  <div className='qoute-img'>
                    <img
                      className='d-block'
                      src={qouteIcon}
                      alt='Quote Icon'
                      style={{
                        objectFit: "contain",
                        height: "73px !important",
                        width: "79px",
                      }}
                    />
                  </div>
                  <div className='feedbackmsg '>
                    <div className='feedback-msg'>
                      <p
                        dangerouslySetInnerHTML={{ __html: feedback.message }}
                      ></p>
                      <hr className='feedbackLine' />
                    </div>
                    <div className='feedback-author'>
                      <p className='author-text'>{feedback.author}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
