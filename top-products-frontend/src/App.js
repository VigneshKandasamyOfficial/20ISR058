import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={AllProductsPage} />
        <Route path="/categories/:category/products/:productId" component={ProductPage} />
      </Routes>
    </Router>
  );
};

export default App;
