import logo from './logo.svg';
import React from 'react';
import './App.css';
// import { ProductList } from './js/app-3';
// import { ProductList } from './js/app-4';
// import { ProductList } from './js/app-5';
// import { ProductList } from './js/app-6';
// import { ProductList } from './js/app-7';
// import { ProductList } from './js/app-8';
// import { ProductList } from './js/app-9';
import { ProductList } from './js/all-complete';
import {Product } from './js/app-4';
// import { Product } from './js/app2';

function App() {
  return (
   <React.Fragment>
    {/* <Product/> */}
    <ProductList/>
   </React.Fragment>
  );
}

export default App;
