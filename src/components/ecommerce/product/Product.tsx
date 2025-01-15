import { useAppDispatch } from "@store/hooks";
import { memo, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProducts } from "@customTypes/product";
import { addToCart } from "@store/cart/cartSlice";

const { product, productImg, maxNotice } = styles;

const Product = memo(
  ({ id, title, img, price, max = 0, quantity }: TProducts) => {
    const dispatch = useAppDispatch();
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);

    const currentRemainingQuantity = max - (quantity ?? 0);
    const reachedToMax = currentRemainingQuantity <= 0 ? true : false;

    useEffect(() => {
      if (!isBtnDisabled) return;
      setIsBtnDisabled(true);
      const clickTimer = setTimeout(() => {
        setIsBtnDisabled(false);
      }, 300);
      return () => clearTimeout(clickTimer);
    }, [isBtnDisabled]);

    function handlerAddToCart() {
      dispatch(addToCart(id));
      setIsBtnDisabled(true);
    }
    return (
      <div className={product}>
        <div className={productImg}>
          <img src={img} alt={title} />
        </div>
        <h2>{title}</h2>
        <h3>{price} EGP</h3>
        <p className={maxNotice}>
          {reachedToMax ? (
            <span className="text-danger fw-bold">
              "You reached max limit "{" "}
            </span>
          ) : (
            ` You can add ${currentRemainingQuantity} item(s)`
          )}
        </p>
        <Button
          variant="info"
          style={{ color: "white" }}
          onClick={handlerAddToCart}
          disabled={isBtnDisabled || reachedToMax}
        >
          {isBtnDisabled ? (
            <>
              <Spinner animation="border" size="sm" /> Loading....
            </>
          ) : (
            "Add to cart"
          )}
        </Button>
      </div>
    );
  }
);

export default Product;
