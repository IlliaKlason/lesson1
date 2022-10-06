import { createAsyncThunk } from '@reduxjs/toolkit';
import { getConditionCategory } from 'helpers/conditionsCategories';
import {
  addExpensiveCategoryAPI,
  addIncomeCategoryAPI,
  deleteCategoriesAPI,
  getCategoriesAPI,
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
  },
  {
    condition: getConditionCategory('income'),
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
  },
  { condition: getConditionCategory('expensive') }
);

export const getIncomeCategories = createAsyncThunk(
  'categories/get/income',
  async (_, thunkAPI) => {
    try {
      const categories = await getCategoriesAPI('income');
      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const getExpensiveCategories = createAsyncThunk(
  'categories/get/expensive',
  async (_, thunkAPI) => {
    try {
      const categories = await getCategoriesAPI('expensive');
      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export function getCategoriesOperation(transactionType) {
  const actionThunk = createAsyncThunk(
    `categories/get/${transactionType}`,
    async (_, thunkAPI) => {
      try {
        const categories = await getCategoriesAPI(transactionType);
        return categories;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.massage);
      }
    },
    {
      condition(_, { getState }) {
        const { [transactionType]: category } = getState().categories;
        return !category.length;
      },
    }
  );
  return actionThunk;
}

export const deleteIncomeCategories = createAsyncThunk(
  'categories/delete/income',
  async (id, thunkAPI) => {
    try {
      await deleteCategoriesAPI('income', id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const deleteExpensiveCategories = createAsyncThunk(
  'categories/delete/expensive',
  async (id, thunkAPI) => {
    try {
      await deleteCategoriesAPI('expensive', id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
