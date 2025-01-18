import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axios from "axios";
import { TProducts } from "@customTypes/product";

type TResponse = TProducts[];

const actGetProductsByItem = createAsyncThunk(
  "cart/actGetProductsByItem",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue } = thunkAPI;
    const { cart } = getState() as RootState;

    const itemsId = Object.keys(cart.cartItems);
    if (!itemsId.length) {
      return fulfillWithValue([]);
    }

    try {
      const concatItemsId = itemsId.map((el) => `id=${el}`).join("&");

      const response = await axios.get<TResponse>(`/products?${concatItemsId}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default actGetProductsByItem;
