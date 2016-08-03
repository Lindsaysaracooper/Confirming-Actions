import React from 'react';
import store from '../store';
import cart from './cart';
import Cart from '../models/Cart';

export default React.createClass({
  getInitialState: function() {
      return {
          cartItems: 0
      }

  },
  addItem: function(e) {
      let addItems = this.state.cart + 1;

  },

  render: function(){
    return null
  }
});
