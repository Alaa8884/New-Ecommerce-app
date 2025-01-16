import { Heading } from "@components/common";
import { CartItem, CartTotalPrice } from "@components/ecommerce";

function ShoppingCart() {
  return (
    <>
      <Heading>Cart</Heading>
      <CartItem/>
      <CartItem/>
      <CartItem />
      <CartTotalPrice/>
    </>
  );
}

export default ShoppingCart;
