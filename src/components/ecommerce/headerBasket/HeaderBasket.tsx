import CartLogo from "@assets/svg/cart.svg?react";
import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";
import { useEffect, useState } from "react";

const { basketContainer, basketCount, pumpCartCount } = styles;

function HeaderBasket() {
  const [isAnimate, setIsAnimate] = useState(false);
  const cartItemsCount = useAppSelector(getCartTotalQuantitySelector);
  const countStyle = `${basketCount} ${isAnimate ? pumpCartCount : ""}`;

  useEffect(() => {
    if (!cartItemsCount) return;
    setIsAnimate(true);
    const timer = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [cartItemsCount]);

  return (
    <div className={basketContainer}>
      <CartLogo title="basket icon" />
      <div className={countStyle}>{cartItemsCount}</div>
    </div>
  );
}

export default HeaderBasket;
