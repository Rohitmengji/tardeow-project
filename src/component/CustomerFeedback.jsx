// const CustomerFeedback = () => {
//   return (
//     <div>
//       <div
//         className='mb-5'
//         style={{
//           position: "relative",
//           //   height: "55vh",
//           width: "auto",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <img
//           src='/assets/Group 602.jpg'
//           alt='Background'
//           style={{
//             // height: "10%",
//             width: "100%",
//             objectFit: "contain",
//           }}
//         />

//         <div
//           style={{
//             position: "absolute",
//             top: "55%",
//             left: "65%",
//             transform: "translate(-50%, -50%)",
//             textAlign: "center",
//           }}
//         >
//           <h2
//             className='text-center'
//             style={{
//                 position: "relative",
//                 // top: "59%",
//               color: "#fff",
//               right : '20%',
//               textAlign: "center",
              
//               transform: "translate(-50%, -330%)",
//             }}
//           >
//             What Our Customer Says
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerFeedback;


// import React from "react";

const CustomerFeedback = () => {
  return (
    <div>
      <div
        className='mb-5'
        style={{
          position: "relative",
          //   height: "55vh",
          width: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src='/assets/Group 602.jpg'
          alt='Background'
          style={{
            // height: "10%",
            width: "100%",
            objectFit: "contain",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "65%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h2
            className='text-center'
            style={{
              position: "relative",
              // top: "59%",
              color: "#fff",
              right: "20%",
              textAlign: "center",
              transform: "translate(-50%, -330%)",
            }}
          >
            What Our Customers Say
          </h2>

          <div
            style={{
              position: "relative",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "20px",
              borderRadius: "5px",
              width: "300px",
              margin: "0 auto",
              marginTop: "20px",
            }}
          >
            <p style={{ marginBottom: "10px" }}>Customer Feedback Message</p>
            <p style={{ marginBottom: "10px" }}>Customer Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
