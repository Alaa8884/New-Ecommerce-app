import { TProducts } from "@customTypes/product";
import styles from "./cartTotalPrice.module.css";
type cartTotalPriceProp = { products: TProducts[] };
function CartTotalPrice({ products }: cartTotalPriceProp) {

  const totalPrice = products.reduce((acc, cur) => {
    const price = cur.price;
    const quantity = cur.quantity;
    if (quantity && typeof quantity === "number") {
      return acc + price * quantity;
    } else {
      return acc;
    }
  }, 0);
  return (
    <div className={styles.container}>
      <span>Subtotal</span>
      <span>{totalPrice.toFixed(2)} EGP</span>
    </div>
  );
}

export default CartTotalPrice;
