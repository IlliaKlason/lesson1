const { default: axios } = require('axios');

axios.defaults.baseURL =
  'https://wallet-312d4-default-rtdb.europe-west1.firebasedatabase.app/';

// getIncomeTransactions = () => {};

// getExpensiveTransactions = () => {};

export const addIncomeTransactionsAPI = data => {
  return axios.post('transactions/income.json', data).then(res => {
    return { id: res.data.name, ...data };
  });
};

export const addExpensiveTransactionsAPI = data => {
  return axios.post('transactions/expensive.json', data).then(res => {
    return { id: res.data.name, ...data };
  });
};

export const getTransactionsAPI = async () => {
  try {
    const response = await axios.get('transactions.json').then();
    const { income, expensive } = response.data;
    const incomeArray = Object.entries(income);
    const expensiveArray = Object.entries(expensive).map(([id, data]) => {
      return { id, ...data };
    });
    return { expensive: expensiveArray, income: incomeArray };
  } catch (error) {
    console.log(error);
  }
};
export const addIncomeCategoryAPI = category => {
  return axios.post('categories/income.json', category).then(res => {
    return { id: res.data.name, ...category };
  });
};
export const addExpensiveCategoryAPI = category => {
  return axios.post('categories/expensive.json', category).then(res => {
    return { id: res.data.name, ...category };
  });
};
