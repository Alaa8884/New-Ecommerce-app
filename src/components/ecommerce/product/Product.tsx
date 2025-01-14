import { useAppDispatch } from "@store/hooks";
import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProducts } from "@customTypes/product";
import { addToCart } from "@store/cart/cartSlice";
const { product, productImg } = styles;

const Product = ({ id, title, img, price }: TProducts) => {
  const dispatch = useAppDispatch()

  function handlerAddToCart() {
    dispatch(addToCart(id))
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
      >
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
