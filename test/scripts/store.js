import { expect } from 'chai';
import { shallow } from 'enzyme';
import store from '../../app/scripts/store';


describe('store module', function (){
  it ('should exist', ()=> {
    expect (store).to.exist
  });
it ('should have a cart property', ()=>{
  expect(store).to.have.property('cart');
  })
})

describe ('store.cart', function (){
  it ('should have a default hasItem value of false', ()=>{
    expect(store.cart.get('hasItem')).to.be.false
  });
  it('should have a default items with an empty array', ()=>{
    expect(store.cart.get('items')).to.have.length(0);
    // expect([]).to.be.empty;
    // im wondering if the above will work because the length will change, i really need it to just have an empty array
  });
  it ('should have default total that is empty', ()=>{
    expect(store.cart.get('total')).to.equal('')
  })
})
