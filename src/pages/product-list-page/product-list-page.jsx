// import './product-list-page.scss';
import { Link } from 'react-router-dom';

const ProductListPage = () => {
  return (
    <>
      <div>ProductListPage</div>
      {/* <a title="Ruta de ejemplo" href="/details" >ENLACE</a> */}
      <p>
        <Link to="/1234">ENLACE</Link>
      </p>
    </>
  );
}

export default ProductListPage;
