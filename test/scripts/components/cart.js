import { expect } from 'chai';
import { shallow } from 'enzyme';
import cart from '../../../app/scripts/components/cart';
import store from '../../../app/scripts/store';



describe ('cart component', function(){
  it('should exist', ()=>{
    expect (cart).to.exist;
  })

  describe ('cart has multiple properties', function (){
    it ('should have', ()=>{
      expect (store.cart).to.have.property('on');
        expect (store.cart).to.have.property('off');
    })

    describe ('cartEmpty is a property on cart', function (){
      it ('should be true', ()=>{
        expect(store.cart).to.have.property('cartEmpty');
      })
    })

  })

  });
