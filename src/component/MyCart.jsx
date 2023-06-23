import { useContext } from "react";
import { CartContext } from "../Store/CartContext";
import { Button, Card, ListGroup } from "react-bootstrap";

const MyCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (total, cartItem) =>
      total + cartItem.product.price * parseInt(cartItem.quantity),
    0
  );

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>My Cart</Card.Header>
      <ListGroup variant='flush'>
        {cart.map((cartItem, index) => (
          <ListGroup.Item key={index}>
            {cartItem.product.name} - {cartItem.product.price} x{" "}
            {cartItem.quantity}
            <Button
              variant='danger'
              size='sm'
              onClick={() => removeFromCart(cartItem.product)}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Footer>
        <strong>Total Price: </strong>₹{total}
      </Card.Footer>
    </Card>
  );
};

export default MyCart;
