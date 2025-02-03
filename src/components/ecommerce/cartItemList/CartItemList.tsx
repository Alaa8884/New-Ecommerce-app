import CartItem from "../cartItem/CartItem";
import { TProducts } from "@customTypes/product";

type cartItemsListProps = {
  products: TProducts[];
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler:(id:number)=> void
};

function CartItemList({
  products,
  changeQuantityHandler,
  removeItemHandler,
}: cartItemsListProps) {
  const renderList = products.map((el) => (
    <CartItem
      key={el.id}
      {...el}
      changeQuantityHandler={changeQuantityHandler}
      removeItemHandler={removeItemHandler}
    />
  ));

  return <div>{renderList}</div>;
}

export default CartItemList;
