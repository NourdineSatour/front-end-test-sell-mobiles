import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = (props) => {
  const params = useParams();

  useEffect(() => {
    console.log("params", params);
  }, [params]);

  return (
      <div>ProductDetailPage</div>
    );
  }
  
  export default ProductDetailPage;
  