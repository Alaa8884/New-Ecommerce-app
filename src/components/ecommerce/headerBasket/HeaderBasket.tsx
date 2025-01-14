import CartLogo from "@assets/svg/cart.svg?react";
import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";


const { basketContainer, basketCount } = styles;

function HeaderBasket() {
  const cartItemsCount = useAppSelector(getCartTotalQuantitySelector);


  return (
    <div className={basketContainer}>
      <CartLogo title="basket icon" />
      <div className={basketCount}>{cartItemsCount}</div>
    </div>
  );
}

export default HeaderBasket;
