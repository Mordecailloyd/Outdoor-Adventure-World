
export const fetchCart = () => {
  $.ajax({
    method: 'GET',
    url: `/api/carts`,
  });
};

export const addCartItem = (productId) => {
  $.ajax({
    method: 'POST',
    url: `/api/carts`,
    data: {productId},
  });
};

export const destroyCartItem = (productId) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/carts/${productId}`,
  });
};
