import { TProducts } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";
import { getCartTotalQuantitySelector } from "./selectors";

interface ICartState {
  cartItems: { [key: number]: number };
  productFullInfo: TProducts[];
}

const initialState: ICartState = {
  cartItems: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.cartItems[id]) {
        state.cartItems[id]++;
      } else {
        state.cartItems[id] = 1;
      }
      state.productFullInfo = [...state.productFullInfo, action.payload];
    },
  },
});


export { getCartTotalQuantitySelector };

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
