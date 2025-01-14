import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../index";
const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.cartItems,
  (items) => {
    const totalQuantity = Object.values(items).reduce(
      (acc, cur) => acc + cur,
      0
    );
    return totalQuantity;
  }
);

export { getCartTotalQuantitySelector };
