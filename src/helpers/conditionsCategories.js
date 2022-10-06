export function getConditionCategory(transactionsType) {
  return function (category, { getState }) {
    const { [transactionsType]: categories } = getState().categories;
    const { category: title } = category;
    const normalizeTitle = title.toUpperCase();
    const some = categories.some(
      elem => elem.category.toUpperCase() === normalizeTitle
    );
    if (some) {
      alert('Added');
      return false;
    }
    return true;
  };
}
