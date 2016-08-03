import { expect} from 'chai';
import Cart from '../../../app/scripts/models/Cart';

describe ('Cart model', function (){
  it ('should exist', ()=>{
    expect (Cart).to.exist;
  });
  var cart = new Cart();
  it ('should have a property called additem', ()=>{
    expect (cart).to.have.property('addItem')
  })

  it ('the addItem is a function',()=>{
    expect(cart.addItem).to.be.a('function')
  })
})
