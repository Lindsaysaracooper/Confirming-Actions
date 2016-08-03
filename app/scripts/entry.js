import React from 'react';
import ReactDOM from 'react-dom';
import cart from './components/cart';

const router =(
  <Router history = {hashHistory}>
    <Route path ="/" component={cart}/>
  </Router>

)

ReactDOM.render(router, document.getElementById('container'));
