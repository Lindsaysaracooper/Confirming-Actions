import Backbone from 'backbone';
import Cart from '../components/cart';
import cartItems from '../components/cartItems'


export default Backbone.Model.extend({
  defaults: {
    hasItem: false,
    items: [],
    total: ''
  },

  addItem: function addItem(){
    let items = this.get('cartItem');
    this.set ('cartItem', items)
    // this.save();
  }
})


// the cart model should also have methods through which new items can be added and removed from it
