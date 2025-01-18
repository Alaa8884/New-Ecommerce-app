import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProductsByItem } from "@store/cart/cartSlice";
import { Heading } from "@components/common";
import { Loading } from "@components/feedbback";
import { CartItemList, CartTotalPrice } from "@components/ecommerce";

function ShoppingCart() {
  const dispatch = useAppDispatch();
  const { cartItems, productFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );
  useEffect(() => {
    dispatch(actGetProductsByItem());
  }, [dispatch]);


  const products = productFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
  }));
  
  return (
    <>
      <Heading>Cart</Heading>
      <Loading loading={loading} error={error}>
        <CartItemList products={products} />
        <CartTotalPrice />
      </Loading>
    </>
  );
}

export default ShoppingCart;
