// import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addExpensiveTransactionsAPI,
  addIncomeTransactionsAPI,
} from 'services/fireBaseAPI';

// axios.de;
// https://wallet-312d4-default-rtdb.europe-west1.firebasedatabase.app/

export const addIncomeTransactions = createAsyncThunk(
  'transaction/add/income',
  async (data, thunkAPI) => {
    try {
      const transaction = await addIncomeTransactionsAPI(data);
      return transaction;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const addExpensiveTransactions = createAsyncThunk(
  'transaction/add/expensive',
  async (data, thunkAPI) => {
    try {
      const transaction = await addExpensiveTransactionsAPI(data);
      return transaction;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

// const addExpensiveTransactions = createAsyncThunk('transaction', async  (data) =>{
//    addExpensiveTransactionsAPI(data)
//    });
