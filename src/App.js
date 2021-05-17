import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from './modules/Container';
import ProductList from './modules/ProductList';
import Cart from './modules/Cart';

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/checkout" component={Cart}/>
          <Route path="/" component={ProductList}/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
