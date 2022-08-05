import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
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
        <Link className="product-detail-page__image__title" to="/"> Atrás </Link>
        <img src={product.imgUrl} alt={product.id} />
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
  