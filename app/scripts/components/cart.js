import React from 'react';
import store from '../store';
import cartItems from './cartItems';


export default React.createClass({
    getInitialState: function() {
        return {
            cartEmpty: true
        }

    },
    updateCart: function() {
        this.setState({
            cart: store.cart.toJSON()
        })
    },

    componentDidMount: function() {
        store.cart.on('change', this.updateCart)
    },
    componentWillUnmount: function() {
        store.cart.off('change', this.updateCart)
    },

    render: function() {
        // let cartItem = 'cartItem';
        return ( <
            input className = "add-button"
            type = 'button'
            onClick = {
                this.addItems
            }
            value = {
                `${this.props.addItems}`
            }
            />
        )
    }
});
