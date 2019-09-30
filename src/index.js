import $ from 'jquery';
import api from './api';
import store from './store';
import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

const main = function() {
  api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    const item = store.items[0];
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'foobar' });
    console.log('new name: ' + item.name);
    shoppingList.render();
  });
  
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
