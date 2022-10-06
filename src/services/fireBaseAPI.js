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
    const incomeArray = updateDataObjectToArray(income);
    const expensiveArray = updateDataObjectToArray(expensive);
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

export const getCategoriesAPI = categoryTransactionType => {
  return axios
    .get(`categories/${categoryTransactionType}.json`)
    .then(res => updateDataObjectToArray(res.data));
};
export const deleteCategoriesAPI = (categoryTransactionType, id) => {
  return axios
    .delete(`categories/${categoryTransactionType}/${id}.json`)
    .then(res => res.data);
};

const updateDataObjectToArray = categories => {
  return Object.entries(categories).map(([id, data]) => {
    return { id, ...data };
  });
};
