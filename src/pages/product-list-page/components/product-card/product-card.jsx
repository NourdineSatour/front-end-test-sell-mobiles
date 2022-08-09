import React from 'react';
import { Link } from 'react-router-dom';
import './product-card.scss';

const ProductCard = (props) => {
  const { product } = props

  return (
    <div className="product-card">
      <Link className="product-card__link" to={`/${product.id}`}>
        <div className="product-card__link__image">
          <img className="product-card__link__image__img" src={product.imgUrl} alt={product.id} />
          
        </div>
        <div className="product-card__link__info">
          <div>
            <div>{`Marca: ${product.brand}`}</div>
            <div>{`Modelo: ${product.model}`}</div>
            <div>{`Precio: ${product.price} €`}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
