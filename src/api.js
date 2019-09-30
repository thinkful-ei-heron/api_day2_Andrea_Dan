const BASE_URL = 'https://thinkful-list-api.herokuapp.com/andreabender';

const getItems = function() {
  //return Promise.resolve('A successful response!');
  //console.log(`${BASE_URL}/items`);
  return fetch(`${BASE_URL}/items`);
};

const createItem = function(name) {
  let newItem = {
    name: name
  };
  newItem = JSON.stringify(newItem);

  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newItem
  });
};

const updateItem = function(id, updateData) {
  updateData = JSON.stringify(updateData);
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: updateData
  });
};

export default {
  getItems,
  createItem,
  updateItem
};
