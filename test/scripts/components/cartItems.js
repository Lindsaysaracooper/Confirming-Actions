import { expect } from 'chai';
import { shallow } from 'enzyme';
import cartItems from '../../../app/scripts/components/cartItems';
import React from 'react';

describe ('cartItems component', function(){
  it('should exist', ()=>{
    expect (cartItems).to.exist;
      })

  });
