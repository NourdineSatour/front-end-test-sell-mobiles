import React, { useState, useEffect } from 'react';
import ProductCard from './components/product-card/product-card';
import './product-list-page.scss';

const ProductListPage = (props) => {
  const {setBreadcrumbs} = props;
  
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);

  const [productsList, setProductsList] = useState(products);

  const handleSearch = (value) => {
    setSearchValue(value.target.value);
    const productsListFiltered = products.filter(product => ( product.brand.toString().toLowerCase().includes(value.target.value.toString().toLowerCase()) || product.model.toString().toLowerCase().includes(value.target.value.toString().toLowerCase()) ));
    setProductsList(productsListFiltered);
  }

  useEffect(() => {
    setBreadcrumbs("Home");
  });
  
  useEffect(() => {
    var actually = new Date();
    if(localStorage.getItem("expired") === null || actually.getTime()>localStorage.getItem("expired")){
      fetch("https://front-test-api.herokuapp.com/api/product")
      .then(res => res.json())
      .then(
        (result) => {
          setProducts(result);
          setProductsList(result);
          var date = new Date();
          date.setTime(date.getTime() + 60 * 60 * 1000);
          localStorage.setItem('expired', date.getTime());
          localStorage.setItem('prs', JSON.stringify(result));
        },
        (error) => {
          console.log("error", error)
        }
      ).catch(error => {
        console.log("error", error)
      });
    } else {
      var prs = JSON.parse(localStorage.getItem('prs'));
      setProducts(prs);
      setProductsList(prs);
    }
    
  }, [])


  return (
    <div className="product-list-page">
      <div className="product-list-page__header">
        <div className="product-list-page__header__title">Products</div>
        <input className="product-list-page__header__search" type="text" value={searchValue} onChange={handleSearch} />
      </div>
      <div className="product-list-page__products">
        {productsList && productsList.map((elem, index)=> {
          return (
            <ProductCard key={index} product={elem}></ProductCard>
          )
        })}
      </div>
    </div>
  );
}

export default ProductListPage;
