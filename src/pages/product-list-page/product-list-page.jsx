import { useState } from 'react';
import ProductCard from './components/product-card/product-card';
import './product-list-page.scss';

const ProductListPage = () => {
  
  const [searchValue, setSearchValue] = useState("");

  const products = [
    {
      id: "0001",
      imagen: "",
      marca: "Samphone",
      modelo: "X1317",
      precio: "150"
    },
    {
      id: "0002",
      imagen: "",
      marca: "Samphone 2",
      modelo: "X1317",
      precio: "145"
    },
    {
      id: "0003",
      imagen: "",
      marca: "Samphone",
      modelo: "X13d",
      precio: "145"
    },
    {
      id: "0004",
      imagen: "",
      marca: "Woto",
      modelo: "sadas",
      precio: "145"
    },
    {
      id: "0005",
      imagen: "",
      marca: "Xacsa",
      modelo: "Asdas",
      precio: "150"
    },
    {
      id: "0006",
      imagen: "",
      marca: "Samphone",
      modelo: "X1317",
      precio: "145"
    },
    {
      id: "0007",
      imagen: "",
      marca: "Samphone",
      modelo: "X1317",
      precio: "145"
    },
    {
      id: "0008",
      imagen: "",
      marca: "Samphone",
      modelo: "X1317",
      precio: "145"
    },
    {
      id: "0009",
      imagen: "",
      marca: "Samphone",
      modelo: "X1317",
      precio: "145"
    },
    {
      id: "0010",
      imagen: "",
      marca: "Samphone",
      modelo: "X1317",
      precio: "145"
    },
    {
      id: "0011",
      imagen: "",
      marca: "Samphone",
      modelo: "X1317",
      precio: "145"
    },
    {
      id: "0012",
      imagen: "",
      marca: "Samphone",
      modelo: "X1317",
      precio: "145"
    },
    {
      id: "0013",
      imagen: "",
      marca: "Samphone",
      modelo: "X1317",
      precio: "145"
    },
    {
      id: "0014",
      imagen: "",
      marca: "Samphone",
      modelo: "X1317",
      precio: "145"
    },
  ];

  const [productsList, setProductsList] = useState(products);

  const handleSearch = (value) => {
    setSearchValue(value.target.value);
    const productsListFiltered = products.filter(product => ( product.marca.toString().toLowerCase().includes(value.target.value.toString().toLowerCase()) || product.modelo.toString().toLowerCase().includes(value.target.value.toString().toLowerCase()) ));
    setProductsList(productsListFiltered);
  }
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
