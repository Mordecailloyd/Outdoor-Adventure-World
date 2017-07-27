export const fetchAllMessages = (productId) => {
  return $.ajax({
    method: 'GET',
    url: `api/messages?product_id=${productId}`,
  });
};



export const createMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: 'api/messages',
    data: { message }
  });
};

export const editMessage = (message)=> {
  return $.ajax({
    method: 'PATCH',
    url: `api/messages/${message.id}`,
    data: message
  });
};

export const deleteMessage = (id) =>{
  return $.ajax({
    method: 'DELETE',
    url: `api/messages/${id}`,
  });
};
