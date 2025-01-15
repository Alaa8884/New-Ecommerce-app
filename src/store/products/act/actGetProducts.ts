import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProducts } from "@customTypes/product";


type TResponse = TProducts[]

const actGetProducts = createAsyncThunk(
  "products/actGetProducts",
  async (prefix:string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `/products?cat_prefix=${prefix}`
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error while fetching data");
      }
    }
  }
);
export default actGetProducts;
