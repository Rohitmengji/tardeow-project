import { useContext, useState } from "react";
import { ProductContext } from "../Store/ProductContext";
import { Button, FormCheck, Card, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import TarOdewNav from "./TarodewNav";
import Categories from "./Categories";
import ImageDisplay from "./ImageDisplay";
import Footer from "./Footer";

const ProductDetails = () => {
  const { selectedProduct, addToCart } = useContext(ProductContext);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!selectedProduct)
    return (
      <div>
        <TarOdewNav />
        <h1>No product selected!</h1>;
      </div>
    );

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
          <Col md={5}>
            <Card.Img variant='top' src={selectedProduct.image} />
          </Col>
          <Col md={4}>
            <Card border="0">
              <Card.Body>
                <Card.Title className='brown'>
                  {selectedProduct.name}
                </Card.Title>
                <Card.Text>{selectedProduct.price}</Card.Text>
                <Card.Text>
                  {renderStars(selectedProduct.rating)}
                  <span> 3 reviews</span>
                </Card.Text>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem numquam et reprehenderit reiciendis dolores magni
                  ipsa dolore, quis suscipit aut, minus aspernatur nobis?
                  Recusandae temporibus molestias non quos delectus dicta quia
                  eligendi repellendus! Deserunt, accusamus rem qui in possimus
                  eius sint laborum dolore illum quae quis repellendus.
                </Card.Text>
                <Card.Text>
                  <strong className='brown'>Size:</strong> 500ML | 1L
                </Card.Text>
                <div className='d-flex align-items-center mb-3'>
                  <Button variant='outline-secondary' onClick={handleDecrement}>
                    -
                  </Button>
                  <div className='mx-2'>{quantity}</div>
                  <Button variant='outline-secondary' onClick={handleIncrement}>
                    +
                  </Button>
                  <div className='ms-auto'>
                    <Button
                      variant='success'
                      className='ms-2'
                      onClick={handleAddToCart}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} className='me-2' />
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <br />
                <FormCheck
                  type='checkbox'
                  id='terms'
                  name='terms'
                  value='agree'
                  label='I agree with the terms and conditions'
                  className='my-2'
                  onChange={() => setAgreeTerms(!agreeTerms)}
                />
                <Button variant='success' disabled={!agreeTerms}>
                  BUY IT NOW!
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
      <Categories />
      <ImageDisplay />
      <Footer />
    </>
  );
};

export default ProductDetails;
