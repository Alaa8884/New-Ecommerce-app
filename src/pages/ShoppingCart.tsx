import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByItem,
  cartItemChangeQuantity,
} from "@store/cart/cartSlice";
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
  

  const changeQuantityHandler = useCallback((id: number, quantity: number) => {
  dispatch(cartItemChangeQuantity({id, quantity}));
},[dispatch])

  return (
    <>
      <Heading>Cart</Heading>
      <Loading loading={loading} error={error}>
        {!products.length ? (
          <div className=" d-flex display-5 fw-bold m-auto">Your Cart is empty</div>
        ) : (
          <>
            {" "}
              <CartItemList products={products} changeQuantityHandler={changeQuantityHandler} />
            <CartTotalPrice />
          </>
        )}
      </Loading>
    </>
  );
}

export default ShoppingCart;
