import CartLogo from "@assets/svg/cart.svg?react";
import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const { container, totalCount, pumpCount, iconWrapper } = styles;

function HeaderBasket() {
  const navigate = useNavigate();
  const [isAnimate, setIsAnimate] = useState(false);
  const cartItemsCount = useAppSelector(getCartTotalQuantitySelector);
  const countStyle = `${totalCount} ${isAnimate ? pumpCount : ""}`;

  useEffect(() => {
    if (!cartItemsCount) return;
    setIsAnimate(true);
    const timer = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [cartItemsCount]);

  return (
    <div className={container} onClick={() => navigate("/cart")}>
      <div className={iconWrapper}>
        <CartLogo title="basket icon" />
        {cartItemsCount > 0 && (
          <div className={countStyle}>{cartItemsCount}</div>
        )}
      </div>
      <h3>Cart</h3>
    </div>
  );
}

export default HeaderBasket;
