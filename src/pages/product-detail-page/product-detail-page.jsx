import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product-detail-page.scss"

const ProductDetailPage = (props) => {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://front-test-api.herokuapp.com/api/product/${params.idDetail}`)
      .then(res => res.json())
      .then(
        (result) => {
          setProduct(result)
        },
        (error) => {
          console.log("error", error)
        }
      ).catch(error => {
        console.log("error", error)
      });
  }, [params.idDetail])

  return (
    <div className="product-detail-page">      
      <div className="product-detail-page__image">
        {/* <img src={ require(`../../assets/img/${product.imagen}`)} alt={product.id} /> */}
        <img src={product.imgUrl} alt={product.id} />
      </div>
      <div className="product-detail-page__info">
        <div className="product-detail-page__info__description">
          <div className="product-detail-page__info__description__title">Description:</div>
          <div className="product-detail-page__info__description__text">{`Brand: ${product.brand}`}</div>
          <div className="product-detail-page__info__description__text">{`Model: ${product.model}`}</div>
          <div className="product-detail-page__info__description__text">{`Price: ${product.price} €`}</div>
          <div className="product-detail-page__info__description__text">{`CPU: ${product.cpu}`}</div>
          <div className="product-detail-page__info__description__text">{`RAM: ${product.ram}`}</div>
          <div className="product-detail-page__info__description__text">{`OS: ${product.os}`}</div>
          <div className="product-detail-page__info__description__text">{`Resolution: ${product.displayResolution}`}</div>
          <div className="product-detail-page__info__description__text">{`Battery: ${product.battery}`}</div>
          <div className="product-detail-page__info__description__text">{`Primary camera: ${product.primaryCamera}`}</div>
          <div className="product-detail-page__info__description__text">{`Secondary camera: ${product.secondaryCmera}`}</div>
          <div className="product-detail-page__info__description__text">{`Display size: ${product.displaySize} `}</div>
          {product.weight && <div className="product-detail-page__info__description__text">{`Weight: ${product.weight} grs.`}</div>}
          
        </div>
        <div className="product-detail-page__info__actions">
          <div>Actions:</div>
          <div>Selector title</div>
          <div>Selector</div>
          <div>Selector title</div>
          <div>Selector</div>
          </div>
      </div>
    </div>

    );
  }
  
  export default ProductDetailPage;
  