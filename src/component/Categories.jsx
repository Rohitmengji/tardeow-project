// // import "../styles/Categories.css";

// // const Categories = () => {
// //   return (
// //     <div>
// //       <h2 className='brown text-center mt-5'>Our Prime Categories</h2>
// //       <div className='card-container row justify-content-center mt-4 mb-4'>
// //         <div className='card col-md-4 col-lg-3 mb-3 mx-2'>
// //           <div className='image-container'>
// //             <img
// //               style={{ objectFit: "contain", height: "300px", width: "100%" }}
// //               src='../assets/Coconut-Oil_1L_advitise.jpg'
// //               alt='Oils Bottle'
// //               className='card-image'
// //             />
// //           </div>
// //           <div className='card-title text-center'>
// //             <strong>Oils</strong>
// //           </div>
// //         </div>

// //         <div className='card col-md-4 col-lg-3 mb-3 mx-2'>
// //           <div className='image-container'>
// //             <img
// //               style={{ objectFit: "contain", height: "300px", width: "100%" }}
// //               src='../assets/Honey_1kg_advitise.jpg'
// //               alt='Honey'
// //               className='card-image'
// //             />
// //           </div>
// //           <div className='card-title text-center'>
// //             <strong>Honey</strong>
// //           </div>
// //         </div>

// //         <div className='card col-md-4 col-lg-3 mb-3 mx-2'>
// //           <div className='image-container'>
// //             <img
// //               style={{ objectFit: "contain", height: "300px", width: "100%" }}
// //               src='../assets/Ghee_1Ltr_advitise.jpg'
// //               alt='Ghee'
// //               className='card-image'
// //             />
// //           </div>
// //           <div className='card-title text-center'>
// //             <strong>Ghee</strong>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Categories;


// import "../styles/Categories.css";

// const Categories = () => {
//   return (
//     <div>
//       <h2 className='brown text-center mt-5'>Our Prime Categories</h2>
//       <div className='card-container row justify-content-center mt-4 mb-4'>
//         <div className='card col-md-4 col-lg-3 mb-3 mx-2'>
//           <div className='image-container'>
//             <img
//               style={{ objectFit: "contain", height: "300px", width: "100%" }}
//               src='../assets/Coconut-Oil_1L_advitise.jpg'
//               alt='Oils Bottle'
//               className='card-image'
//             />
//           </div>
//         </div>
//         <div className='card-title text-center'>
//           <strong>Oils</strong>
//         </div>
//       </div>

//       <div className='card-container row justify-content-center mt-4 mb-4'>
//         <div className='card col-md-4 col-lg-3 mb-3 mx-2'>
//           <div className='image-container'>
//             <img
//               style={{ objectFit: "contain", height: "300px", width: "100%" }}
//               src='../assets/Honey_1kg_advitise.jpg'
//               alt='Honey'
//               className='card-image'
//             />
//           </div>
//         </div>
//         <div className='card-title text-center'>
//           <strong>Honey</strong>
//         </div>
//       </div>

//       <div className='card-container row justify-content-center mt-4 mb-4'>
//         <div className='card col-md-4 col-lg-3 mb-3 mx-2'>
//           <div className='image-container'>
//             <img
//               style={{ objectFit: "contain", height: "300px", width: "100%" }}
//               src='../assets/Ghee_1Ltr_advitise.jpg'
//               alt='Ghee'
//               className='card-image'
//             />
//           </div>
//         </div>
//         <div className='card-title text-center'>
//           <strong>Ghee</strong>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;


import "../styles/Categories.css";

const Categories = () => {
  return (
    <div>
      <h2 className='brown text-center mt-5'>Our Prime Categories</h2>
      <div className='card-container row justify-content-center mt-4 mb-4'>
        <div className='col-md-4 col-lg-3 mb-3'>
          <div className='card'>
            <div className='image-container'>
              <img
                style={{ objectFit: "contain", height: "300px", width: "100%" }}
                src='../assets/Coconut-Oil_1L_advitise.jpg'
                alt='Oils Bottle'
                className='card-image'
              />
            </div>
            <div className='card-title text-center'>
              <strong>Oils</strong>
            </div>
          </div>
        </div>

        <div className='col-md-4 col-lg-3 mb-3'>
          <div className='card'>
            <div className='image-container'>
              <img
                style={{ objectFit: "contain", height: "300px", width: "100%" }}
                src='../assets/Honey_1kg_advitise.jpg'
                alt='Honey'
                className='card-image'
              />
            </div>
            <div className='card-title text-center'>
              <strong>Honey</strong>
            </div>
          </div>
        </div>

        <div className='col-md-4 col-lg-3 mb-3'>
          <div className='card'>
            <div className='image-container'>
              <img
                style={{ objectFit: "contain", height: "300px", width: "100%" }}
                src='../assets/Ghee_1Ltr_advitise.jpg'
                alt='Ghee'
                className='card-image'
              />
            </div>
            <div className='card-title text-center'>
              <strong>Ghee</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
