import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addExpensiveCategoryAPI,
  addIncomeCategoryAPI,
} from 'services/fireBaseAPI';

export const addIncomeCategory = createAsyncThunk(
  'categories/add/income',
  async (category, thunkAPI) => {
    try {
      const categories = await addIncomeCategoryAPI(category);
      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
export const addExpensiveCategory = createAsyncThunk(
  'categories/add/expensive',
  async (category, thunkAPI) => {
    try {
      const categories = await addExpensiveCategoryAPI(category);
      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
