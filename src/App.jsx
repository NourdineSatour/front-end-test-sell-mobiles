import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/product-list-page/product-list-page';
import ProductDetailPage from './pages/product-detail-page/product-detail-page';
import Header from './components/header';
import { useCookies } from 'react-cookie';

import './App.css';

const App = () => {

  const [cookies, setCookies] = useCookies();
  const [totalProducts, setTotalProducts] = useState(cookies.total?parseInt(cookies.total):0);



  return (
    <>
      <Header totalProducts={totalProducts}/>
      <Routes>
        <Route path='/' element={<ProductListPage />} />
        <Route path='/:idDetail' element={<ProductDetailPage cookies={cookies} setCookies={setCookies} totalProducts={totalProducts} setTotalProducts={setTotalProducts} />} />
      </Routes>
    </>
  );
}

export default App;
