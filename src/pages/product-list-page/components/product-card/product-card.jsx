import { Link } from 'react-router-dom';
import imagen from "../../../../assets/img/imagen.png"
import './product-card.scss';

const ProductCard = (props) => {
  const { product } = props
  console.log("imagen",imagen)

  return (
    <div className="product-card">
      <Link className="product-card__link" to={`/${product.id}`}>
        <div className="product-card__link__image">
          <img src={ require(`../../../../assets/img/${product.imagen}`)} alt={product.id} />
          
        </div>
        <div className="product-card__link__info">
          <div>
            <div>{`Marca: ${product.marca}`}</div>
            <div>{`Modelo: ${product.modelo}`}</div>
            <div>{`Precio: ${product.precio}€`}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
