export const getInitialState = (KEY, data) => {
  return JSON.parse(localStorage.getItem(KEY)) || data;
};
export const setToLS = (KEY, data) => {
  return localStorage.setItem(KEY, JSON.stringify(data));
};
