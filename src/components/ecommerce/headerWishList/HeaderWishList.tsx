import WishLogo from "@assets/svg/wishlist.svg?react";
import styles from "./styles.module.css";
// import { useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const { container, totalCount, pumpCount, iconWrapper } = styles;

function HeaderWishList() {
  const navigate = useNavigate();
  const [isAnimate, setIsAnimate] = useState(false);
  const cartItemsCount = 0;
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
    <div className={container} onClick={() => navigate("/wishList")}>
      <div className={iconWrapper}>
        <WishLogo title="WishList icon" />
        {cartItemsCount > 0 && (
          <div className={countStyle}>{cartItemsCount}</div>
        )}
      </div>
      <h3>WishList</h3>
    </div>
  );
}

export default HeaderWishList;
