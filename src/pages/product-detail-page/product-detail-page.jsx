import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Select from 'react-select';
import "./product-detail-page.scss";

const ProductDetailPage = (props) => {
  const params = useParams();
  const { setTotalProducts, setBreadcrumbs} = props;
  const [product, setProduct] = useState({});
  const [storageOptions, setStorageOptions] = useState([]);
  const [colorOptions, setColorOptions] = useState([]);
  const [storageSelected, setStorageSelected] = useState({});
  const [colorSelected, setColorSelected] = useState({});
  const [disabledButton, setDisabledButton] = useState(true);
  const goBackText ="<-Atrás";

  const handleSelectStorage = (value) => {
    setStorageSelected(value)
  }

  const handleSelectColor = (value) => {
    setColorSelected(value)
  }

  const handleClick = () => {
    var sendData = JSON.stringify({
      id: product.id,
      colorCode: colorSelected.value,
      storageCode: storageSelected.value
     }) 


    fetch(`https://front-test-api.herokuapp.com/api/cart`, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
    },
      body: sendData
    })
    .then(res => res.json())
    .then(
      (result) => {
        localStorage.setItem("cart", JSON.stringify(result.count));
        setTotalProducts(result.count);
      },
      (error) => {
        console.log("error", error)
      }
    );
  }

  const formatToSelect = (array) => {
    return array.map(storage =>{ return { value: storage.code, label: storage.name }});
  }
  useEffect(() => {
    if(product.brand)
      setBreadcrumbs(`Home->${product.brand} (${product.model})`);
  });

  useEffect(() => {
    var actually = new Date();

    if(localStorage.getItem(`expired${params.idDetail}`) === null || actually.getTime()>localStorage.getItem(`expired${params.idDetail}`)) {
      fetch(`https://front-test-api.herokuapp.com/api/product/${params.idDetail}`)
      .then(res => res.json())
      .then(
        (result) => {
          var date = new Date();
          date.setTime(date.getTime() + 60 * 60 * 1000);
          localStorage.setItem(`expired${params.idDetail}`, date.getTime());
          localStorage.setItem(`pr${params.idDetail}`, JSON.stringify(result));

          setStorageOptions(formatToSelect(result.options.storages));
          if(result.options.storages.length === 1)
            setStorageSelected(formatToSelect(result.options.storages)[0])
          setColorOptions(formatToSelect(result.options.colors));
          if(result.options.colors.length === 1)
            setColorSelected(formatToSelect(result.options.colors)[0])
          setProduct(result);
        },
        (error) => {
          console.log("error", error)
        }
      ).catch(error => {
        console.log("error", error)
      });
    } else {
      var pr = JSON.parse(localStorage.getItem(`pr${params.idDetail}`));
      setStorageOptions(formatToSelect(pr.options.storages));
      if(pr.options.storages.length === 1)
        setStorageSelected(formatToSelect(pr.options.storages)[0])
      setColorOptions(formatToSelect(pr.options.colors));
      if(pr.options.colors.length === 1)
        setColorSelected(formatToSelect(pr.options.colors)[0])
      setProduct(pr);
    }
    
  }, [params.idDetail])


  useEffect(() => {
    if(colorSelected.value && storageSelected.value)
      setDisabledButton(false)
    else
      setDisabledButton(true)
  }, [colorSelected, storageSelected])

  return (
    <div className="product-detail-page">      
      <div className="product-detail-page__image">
        <Link className="product-detail-page__image__title" to="/">{goBackText}</Link>
        <div className="product-detail-page__image__container">
          <img className="product-detail-page__image__container__img" src={product.imgUrl} alt={product.id} />
        </div>
      </div>
      <div className="product-detail-page__info">
        <div className="product-detail-page__info__description">
          <div className="product-detail-page__info__description__title">Description:</div>
          { product.brand && <div className="product-detail-page__info__description__text">{`Brand: ${product.brand}`}</div>}
          { product.model && <div className="product-detail-page__info__description__text">{`Model: ${product.model}`}</div>}
          { product.price && <div className="product-detail-page__info__description__text">{`Price: ${product.price} €`}</div>}
          { product.cpu && <div className="product-detail-page__info__description__text">{`CPU: ${product.cpu}`}</div>}
          { product.ram && <div className="product-detail-page__info__description__text">{`RAM: ${product.ram}`}</div>}
          { product.os && <div className="product-detail-page__info__description__text">{`OS: ${product.os}`}</div>}
          { product.displayResolution && <div className="product-detail-page__info__description__text">{`Resolution: ${product.displayResolution}`}</div>}
          { product.battery && <div className="product-detail-page__info__description__text">{`Battery: ${product.battery}`}</div>}
          { product.primaryCamera && <div className="product-detail-page__info__description__text">{`Primary camera: ${product.primaryCamera}`}</div>}
          { product.secondaryCmera && <div className="product-detail-page__info__description__text">{`Secondary camera: ${product.secondaryCmera}`}</div>}
          { product.displaySize && <div className="product-detail-page__info__description__text">{`Display size: ${product.displaySize} `}</div>}
          {product.weight && <div className="product-detail-page__info__description__text">{`Weight: ${product.weight} grs.`}</div>}
          
        </div>
        <div className="product-detail-page__info__actions">
          <div>Actions:</div>
          <div>Storage</div>
          <div  className="product-detail-page__info__actions__storage">
          <Select options={storageOptions} value={storageSelected} onChange={handleSelectStorage} />
          </div>
          <div>Color</div>
          <div  className="product-detail-page__info__actions__color">
          <Select options={colorOptions} value={colorSelected} onChange={handleSelectColor} />
          </div>
          </div>
          <div className="product-detail-page__info__wrapper-button">
            <button className="product-detail-page__info__wrapper-button__button" disabled={disabledButton} onClick={handleClick}>Añadir al carro</button>
          </div>
      </div>
    </div>

    );
  }
  
  export default ProductDetailPage;
  