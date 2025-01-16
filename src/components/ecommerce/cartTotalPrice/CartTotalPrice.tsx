import styles from "./cartTotalPrice.module.css";

function CartTotalPrice() {
  return (
    <div className={styles.container}>
      <span>Subtotal</span>
      <span>200.00</span>
    </div>
  );
}

export default CartTotalPrice;
