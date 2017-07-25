export const fetchProducts = () =>{
  return (
    $.ajax({
      method: 'GET',
      url: '/api/products',
    }));
};

export const fetchProduct = (id) => {
  return (
  $.ajax({
    method: 'GET',
    url: `/api/products/${id}`,
  }));
};

export const searchProducts = (query, success) => {
  $.ajax({
    method: 'GET',
    url: '/api/products',
    data: {query},
    success
  });
};
