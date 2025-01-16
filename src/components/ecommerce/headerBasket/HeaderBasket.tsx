import CartLogo from "@assets/svg/cart.svg?react";
import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const { basketContainer, basketCount, pumpCartCount, basketCart } = styles;

function HeaderBasket() {
  const navigate = useNavigate();
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
    <div className={basketContainer} onClick={() => navigate("/cart")}>
      <div className={basketCart}>
        <CartLogo title="basket icon" />
        <div className={countStyle}>{cartItemsCount}</div>
      </div>
      <h3>Cart</h3>
    </div>
  );
}

export default HeaderBasket;
