// import { useContext, useState } from "react";
// import { ProductContext } from "../Store/ProductContext";
// import { Button, FormCheck, Container, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import TarOdewNav from "./TarodewNav";
// import Categories from "./Categories";
// import ImageDisplay from "./ImageDisplay";
// import Footer from "./Footer";
// import ImageGallery from "./ImageGaller";

// const ProductDetails = () => {
//   const { selectedProduct, addToCart } = useContext(ProductContext);
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [quantity, setQuantity] = useState(1);

//   if (!selectedProduct) {
//     return (
//       <div>
//         <TarOdewNav />
//         <h1 className='text-center'>No product selected!</h1>
//       </div>
//     );
//   }

//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 0; i < rating; i++) {
//       stars.push(
//         <FontAwesomeIcon
//           key={i}
//           icon={faStar}
//           style={{ color: "#dc970c", margin: "5px" }}
//         />
//       );
//     }
//     return stars;
//   };

//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     addToCart(selectedProduct, quantity);
//     // Reset quantity and terms after adding to cart
//     setQuantity(1);
//     setAgreeTerms(false);
//   };

//   return (
//     <>
//       <TarOdewNav />
//       <Container fluid>
//         <Row className='d-flex align-items-center'>
//           <Col xs={12} sm={6} md={6} lg={6} xl={6}>
//             <ImageGallery />
//           </Col>
//           <Col xs={12} sm={6} md={6} lg={6} xl={6}>
//             <div className='card mt-4 border-0'>
//               <div className='card-body'>
//                 <h2 className='card-title text-brown'>
//                   {selectedProduct.name}
//                 </h2>
//                 <p className='card-text'>{selectedProduct.price}</p>
//                 <p className='card-text'>
//                   {renderStars(selectedProduct.rating)}
//                   <span> 3 reviews</span>
//                 </p>
//                 <p className='card-text'>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Voluptatem numquam et reprehenderit reiciendis dolores magni
//                   ipsa dolore, quis suscipit aut, minus aspernatur nobis?
//                   Recusandae temporibus molestias non quos delectus dicta quia
//                   eligendi repellendus! Deserunt, accusamus rem qui in possimus
//                   eius sint laborum dolore illum quae quis repellendus accusamus
//                   rem qui in possimus eius sint laborum dolore illum quae quis
//                   repellendus.
//                 </p>
//                 <p className='card-text'>
//                   <strong className='brown'>Size:</strong> 500ML | 1L
//                 </p>
//                 <div className='d-flex align-items-center mb-3'>
//                   <div
//                     style={{ backgroundColor: "#f1f2f1", height: "44px" }}
//                     className='d-flex align-items-center'
//                   >
//                     <button
//                       className='btn'
//                       onClick={handleDecrement}
//                       style={{ fontSize: "1.6rem" }}
//                     >
//                       -
//                     </button>
//                     <div className='mx-2 fw-bold'>{quantity}</div>
//                     <button
//                       className='btn'
//                       onClick={handleIncrement}
//                       style={{ fontSize: "1.5rem" }}
//                     >
//                       +
//                     </button>
//                   </div>

//                   <div className='ms-auto'>
//                     <Button
//                       variant='success'
//                       className='ms-2 rounded-pill'
//                       style={{ backgroundColor: "#456c33" }}
//                       onClick={handleAddToCart}
//                     >
//                       <FontAwesomeIcon icon={faShoppingCart} className='me-2' />
//                       Add to Cart
//                     </Button>
//                   </div>
//                 </div>

//                 <FormCheck
//                   type='checkbox'
//                   id='terms'
//                   name='terms'
//                   value='agree'
//                   label='I agree with the terms and conditions'
//                   className='my-2'
//                   onChange={() => setAgreeTerms(!agreeTerms)}
//                 />
//                 <Button
//                   style={{ backgroundColor: "#456c33" }}
//                   variant='success'
//                   className='rounded-pill'
//                   disabled={!agreeTerms}
//                 >
//                   BUY IT NOW!
//                 </Button>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       <Categories />
//       <ImageDisplay />
//       <Footer />
//     </>
//   );
// };

// export default ProductDetails;



import  { useContext, useState } from "react";
import { ProductContext } from "../Store/ProductContext";
import { Button, FormCheck, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import TarOdewNav from "./TarodewNav";
import Categories from "./Categories";
import ImageDisplay from "./ImageDisplay";
import Footer from "./Footer";
import ImageGallery from "./ImageGaller";
import AccordionProductDetails from "./AccordionProductDetails";

const ProductDetails = () => {
  const { selectedProduct, addToCart } = useContext(ProductContext);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!selectedProduct) {
    return (
      <div>
        <TarOdewNav />
        <h1 className='text-center'>No product selected!</h1>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          style={{ color: "#dc970c", margin: "5px" }}
        />
      );
    }
    return stars;
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
    // Reset quantity and terms after adding to cart
    setQuantity(1);
    setAgreeTerms(false);
  };

  return (
    <>
      <TarOdewNav />
      <Container fluid>
        <Row className='d-flex align-items-center'>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <ImageGallery />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <div className='card mt-4 border-0'>
              <div className='card-body'>
                <h2
                  className='card-title text-brown'
                  style={{ color: "#5f262c" }}
                >
                  {selectedProduct.name}
                </h2>
                <p style={{ color: "#4d6740" }} className='card-text fw-bold'>
                  {selectedProduct.price} <del>600</del>
                </p>
                <p className='card-text'>
                  {renderStars(selectedProduct.rating)}
                  <span> 3 reviews</span>
                </p>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem numquam et reprehenderit reiciendis dolores magni
                  ipsa dolore, quis suscipit aut, minus aspernatur nobis?
                  Recusandae temporibus molestias non quos delectus dicta quia
                  eligendi repellendus! Deserunt, accusamus rem qui in possimus
                  eius sint laborum dolore illum quae quis repellendus accusamus
                  rem qui in possimus eius sint laborum dolore illum quae quis
                  repellendus.
                </p>
                <p className='card-text'>
                  <strong style={{ color: "#4d6740" }}>Size: 500ML | 1L</strong>
                </p>
                <div className='d-flex align-items-center mb-3'>
                  <div
                    style={{ backgroundColor: "#f1f2f1", height: "44px" }}
                    className='d-flex align-items-center'
                  >
                    <button
                      className='btn'
                      onClick={handleDecrement}
                      style={{ fontSize: "1.6rem" }}
                    >
                      -
                    </button>
                    <div className='mx-2 fw-bold'>{quantity}</div>
                    <button
                      className='btn'
                      onClick={handleIncrement}
                      style={{ fontSize: "1.5rem" }}
                    >
                      +
                    </button>
                  </div>

                  <div className='ms-auto'>
                    <Button
                      variant='success'
                      className='ms-2 rounded-pill'
                      style={{ backgroundColor: "#456c33" }}
                      onClick={handleAddToCart}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} className='me-2' />
                      Add to Cart
                    </Button>
                  </div>
                </div>

                <FormCheck
                  type='checkbox'
                  id='terms'
                  name='terms'
                  value='agree'
                  label='I agree with the terms and conditions'
                  className='my-2'
                  onChange={() => setAgreeTerms(!agreeTerms)}
                />
                <Button
                  style={{ backgroundColor: "#456c33", width: "100%" }}
                  variant='success'
                  className='rounded-pill my-4'
                  disabled={!agreeTerms}
                >
                  BUY IT NOW!
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <AccordionProductDetails />
      <Categories />
      <ImageDisplay />
      <Footer />
    </>
  );
};

export default ProductDetails;
