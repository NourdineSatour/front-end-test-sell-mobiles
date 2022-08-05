import { useState, useEffect } from 'react';
import ProductCard from './components/product-card/product-card';
import './product-list-page.scss';

const ProductListPage = () => {
  
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);

  const [productsList, setProductsList] = useState(products);

  const handleSearch = (value) => {
    setSearchValue(value.target.value);
    const productsListFiltered = products.filter(product => ( product.brand.toString().toLowerCase().includes(value.target.value.toString().toLowerCase()) || product.model.toString().toLowerCase().includes(value.target.value.toString().toLowerCase()) ));
    setProductsList(productsListFiltered);
  }


  useEffect(() => {
    fetch("https://front-test-api.herokuapp.com/api/product")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result", result);
          setProducts(result);
          setProductsList(result);
        },
        (error) => {
          console.log("error", error)
        }
      ).catch(error => {
        console.log("error", error)
      });
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
