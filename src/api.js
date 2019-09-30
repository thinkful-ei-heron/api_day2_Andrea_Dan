const BASE_URL = 'https://thinkful-list-api.herokuapp.com/andreabender';

const getItems = function() {
  //return Promise.resolve('A successful response!');
  //console.log(`${BASE_URL}/items`);
  return fetch(`${BASE_URL}/items`);
};

export default {
  getItems
};
