import CartItem from "../cartItem/CartItem";
import { TProducts } from "@customTypes/product";

type cartItemsListProps = { products: TProducts[] };

function CartItemList({ products }: cartItemsListProps) {
  const renderList = products.map((el) => <CartItem key={el.id} {...el} />);

  return <div>{renderList}</div>;
}

export default CartItemList;
