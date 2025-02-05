import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByItem from "./actGetProductsByItem/actGetProductsByItem";
import {
  getCartTotalQuantitySelector,
  itemQuantityAvailabilityCheckingSelector,
} from "./selectors";
import { TProducts } from "@customTypes/product";
import { TLoading } from "@customTypes/shared";

interface ICartState {
  cartItems: { [key: string]: number };
  productFullInfo: TProducts[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICartState = {
  cartItems: {},
  productFullInfo: [],
  loading: "idle",
  error: null,
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
    },
    cartItemChangeQuantity: (state, action) => {
      state.cartItems[action.payload.id] = action.payload.quantity;
    },
    cartItemRemoveQuantity: (state, action) => {
      delete state.cartItems[action.payload];
      state.productFullInfo = state.productFullInfo.filter(
        (el) => el.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByItem.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByItem.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productFullInfo = action.payload;
    });
    builder.addCase(actGetProductsByItem.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string")
        state.error = action.payload;
    });
  },
});


export {
  getCartTotalQuantitySelector,
  actGetProductsByItem,
  itemQuantityAvailabilityCheckingSelector,
};

export const { addToCart, cartItemChangeQuantity, cartItemRemoveQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
