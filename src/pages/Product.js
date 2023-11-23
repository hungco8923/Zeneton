import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

import { useState, useEffect } from "react";
import Loading from "react-fullscreen-loading";
const Product = () => {
  const [products, setProducts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const { type } = useParams();

  useEffect(
    () => {
      setIsPending(true);
      setTimeout(() => {
        fetch(`http://localhost:8080/${type}`)
          .then(res => {
            if (!res.ok) {
              throw Error("Can not find any products");
            }
            return res.json();
          })
          .then(data => {
            setProducts(data);
            setIsPending(false);
            setError(null);
          })
          .catch(err => {
            setProducts(null);
            setIsPending(false);
            setError(err.message);
          });
      }, 3000);
    },
    [type]
  );

  console.log(products);
  return (
    <div className="page-container">
      <div className="product">
        <div className="product__title">
          <h1>
            {type}
          </h1>
        </div>
        <div className="product__carousel">
          <div className="product__carousel__content">
            <h2>
              This is title {type}
            </h2>
            <p>
              This our collection of finest {type} made by Zeneton
            </p>
          </div>
          <div className="product__carousel__img" />
        </div>
        <div className="product__list">
          {error &&
            <div>
              {error}
            </div>}
          {isPending &&
            <Loading loading background={`#ffffff80`} loaderColor="#000" />}
          {products &&
            products.map(product =>
              <ProductCard key={product.id} product={product} />
            )}
        </div>
        <div className="product__description">
          <div className="product__description__img" />
          <div className="product__description__content" />
        </div>
      </div>
    </div>
  );
};

export default Product;
