import $ from 'jquery';
import api from './api';
import store from './store';
import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

const main = function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
