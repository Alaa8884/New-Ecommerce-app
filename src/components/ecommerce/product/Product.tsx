import { useAppDispatch } from "@store/hooks";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProducts } from "@customTypes/product";
import { addToCart } from "@store/cart/cartSlice";


const { product, productImg } = styles;

const Product = ({ id, title, img, price }: TProducts) => {
  const dispatch = useAppDispatch();
  const [isBtnClicked, setIsBtnClicked] = useState(0);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  useEffect(() => {
    if (!isBtnClicked) return;
    setIsBtnDisabled(true);
    const clickTimer = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);
    return () => clearTimeout(clickTimer);
  }, [isBtnClicked]);

  function handlerAddToCart() {
    dispatch(addToCart(id));
    setIsBtnClicked((prev) => prev + 1);
  }
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={handlerAddToCart}
        disabled={isBtnDisabled}
      >
        {isBtnDisabled ? <><Spinner animation="border" size="sm"/> Loading....</> :  "Add to cart"}
       
      </Button>
    </div>
  );
};

export default Product;
