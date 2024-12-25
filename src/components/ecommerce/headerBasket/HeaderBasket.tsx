import CartLogo from "../../../assets/svg/cart.svg?react";
import styles from "./styles.module.css";

const { basketContainer, basketCount } = styles;

function HeaderBasket() {

  return (
    <div className={basketContainer}>
      <CartLogo title="basket icon" />
      <div className={basketCount}>0</div>
    </div>
  );
}

export default HeaderBasket;
