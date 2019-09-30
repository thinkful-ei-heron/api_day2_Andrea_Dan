const BASE_URL = 'https://thinkful-list-api.herokuapp.com/andreabender';

const getItems = function() {
  //return Promise.resolve('A successful response!');
  //console.log(`${BASE_URL}/items`);
  return listApiFetch(`${BASE_URL}/items`);
};

const createItem = function(name) {
  let newItem = {
    name: name
  };
  newItem = JSON.stringify(newItem);

  return listApiFetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newItem
  });
};

const deleteItem = function(id) {
  return listApiFetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE'
  });
};

const updateItem = function(id, updateData) {
  updateData = JSON.stringify(updateData);
  return listApiFetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: updateData
  });
};

function listApiFetch(...args) {
  let error;
  console.log(args[0]);
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        // Valid HTTP response but non-2xx status - let's create an error!
        error = { code: res.status };
      }

      // In either case, parse the JSON stream:
      return res.json();
    })

    .then(data => {
      // If error was flagged, reject the Promise with the error object
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }

      // Otherwise give back the data as resolved Promise
      return data;
    });
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};
