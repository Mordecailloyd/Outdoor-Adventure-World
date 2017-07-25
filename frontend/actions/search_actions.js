export const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';



export const clearSearch = () => ({
  type: CLEAR_SEARCH
});

export const clearProducts = () => ({
  type: CLEAR_PRODUCTS
});

export const searchProducts = (query) => ({
  type: SEARCH_PRODUCTS,
  query
});

export const searchResults = (products) => ({
  type: SEARCH_RESULTS,
  products
});
