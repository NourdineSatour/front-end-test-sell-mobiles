import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product-detail-page.scss"

const ProductDetailPage = (props) => {
  const params = useParams();

  const product = {
    id: "0001",
    imagen: "imagen.png",

    brand: "Samphone",
    modelo: "X1317",
    precio: "150",
    cpu: "cpu-7",
    ram: "ram-x47",
    sistemaOperativo: "SO-76",
    resolucion: "1400x800",
    bateria: "4000",
    camaras: "120",
    dimensiones: "15x8",
    peso: "800"
  };

  useEffect(() => {
    console.log("params", params);
  }, [params]);

  return (
    <div className="product-detail-page">      
      <div className="product-detail-page__image">
        <img src={ require(`../../assets/img/${product.imagen}`)} alt={product.id} />
      </div>
      <div className="product-detail-page__info">
        <div className="product-detail-page__info__description">
          <div className="product-detail-page__info__description__title">Descripción del producto:</div>
          <div className="product-detail-page__info__description__text">{`Marca: ${product.brand}`}</div>
          <div className="product-detail-page__info__description__text">{`Modelo: ${product.modelo}`}</div>
          <div className="product-detail-page__info__description__text">{`Precio: ${product.precio} €`}</div>
          <div className="product-detail-page__info__description__text">{`CPU: ${product.cpu}`}</div>
          <div className="product-detail-page__info__description__text">{`RAM: ${product.ram}`}</div>
          <div className="product-detail-page__info__description__text">{`Sistema Operativo: ${product.sistemaOperativo}`}</div>
          <div className="product-detail-page__info__description__text">{`Resolución: ${product.resolucion}`}</div>
          <div className="product-detail-page__info__description__text">{`Bateria: ${product.bateria} mAh`}</div>
          <div className="product-detail-page__info__description__text">{`Camaras: ${product.camaras} MP`}</div>
          <div className="product-detail-page__info__description__text">{`Dimensiones: ${product.dimensiones} cmxcm`}</div>
          <div className="product-detail-page__info__description__text">{`Peso: ${product.peso} grs.`}</div>
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
  