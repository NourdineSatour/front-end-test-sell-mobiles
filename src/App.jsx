import React, {  useState } from "react";
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/product-list-page/product-list-page';
import ProductDetailPage from './pages/product-detail-page/product-detail-page';
import Header from './components/header';

import './App.css';

const App = () => {


  const [totalProducts, setTotalProducts] = useState(localStorage.getItem("cart")?parseInt(localStorage.getItem("cart")):0);
  const [breadcrumbs, setBreadcrumbs] = useState("Home")

  return (
    <>
      <Header totalProducts={totalProducts} breadcrumbs={breadcrumbs} />
      <Routes>
        <Route path='/' element={<ProductListPage setBreadcrumbs={setBreadcrumbs} />} />
        <Route path='/:idDetail' element={<ProductDetailPage totalProducts={totalProducts} setTotalProducts={setTotalProducts} setBreadcrumbs={setBreadcrumbs} />} />
      </Routes>
    </>
  );
}

export default App;
