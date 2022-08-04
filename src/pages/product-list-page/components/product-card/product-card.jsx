import { Link } from 'react-router-dom';
import './product-card.scss';

const ProductCard = (props) => {
  const { product } = props

  return (
    <div className="product-card">
      <Link className="product-card__link" to={`/${product.id}`}>
        <div className="product-card__link__image">{product.id}</div>
        <div className="product-card__link__info">
          <div>{product.marca}</div>
          <div>{product.modelo}</div>
          <div>{`${product.precio}€`}</div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
