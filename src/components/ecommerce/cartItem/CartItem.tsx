import { memo } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProducts } from "@customTypes/product";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;

type cartItemProps = TProducts & {
  changeQuantityHandler: (id: number, quantity: number) => void;
};

const  CartItem = memo(({
  id,
  title,
  price,
  img,
  max,
  quantity,
  changeQuantityHandler,
}: cartItemProps)=> {
  
  const renderQuantityList = Array(max)
    .fill(0)
    .map((_, index) => {
      const quantity = ++index;
      return (
        <option value={quantity} key={quantity}>
          {" "}
          {quantity}
        </option>
      );
    });

  const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = parseInt(event.target.value);
    changeQuantityHandler(id, quantity);
  };

  return (
    <div className={cartItem}>
      <div className={product}>
        <div className={productImg}>
          <img src={img} alt={title} />
        </div>
        <div className={productInfo}>
          <h2>{title}</h2>
          <h3>{price} EGP</h3>
          <Button
            variant="danger"
            style={{ color: "white", width: "100px" }}
            className="mt-auto"
          >
            Remove
          </Button>
        </div>
      </div>

      <div className={cartItemSelection}>
        <span className="d-block mb-1">Quantity</span>
        <Form.Select
          aria-label="Default select example"
          value={quantity}
          onChange={changeQuantity}
        >
          {renderQuantityList}
        </Form.Select>
      </div>
    </div>
  );
})

export default CartItem;
