import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/product-list-page/product-list-page';
import ProductDetailPage from './pages/product-detail-page/product-detail-page';
import Header from './components/header';
import './App.css';

const App = () => {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ProductListPage/>} />
        <Route path='/:idDetail' element={<ProductDetailPage/>} />
      </Routes>
    </>
  );
}

export default App;
