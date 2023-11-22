import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Product1 from "../resources/img/Product1.jpg";
import { useState, useEffect } from "react";
const Product = () => {
  const [products, setProducts] = useState(null);
  const { type } = useParams();

  useEffect(
    () => {
      const fetchProducts = async () => {
        const response = await fetch(`http://localhost:8080/${type}`);
        const json = await response.json();

        if (response.ok) {
          setProducts(json);
        } else {
          setProducts(null);
        }
      };
      fetchProducts();
    },
    [type]
  );
  console.log(products);
  return (
    <div className="page-container">
      <div className="product">
        <div className="product__title">
          <h1>Briefs</h1>
        </div>
        <div className="product__carousel">
          <div className="product__carousel__content">
            <h2>This is title Briefs</h2>
            <p>This our collection of finest briefs made by Zeneton</p>
          </div>
          <div className="product__carousel__img" />
        </div>
        <div className="product__list">
          {products
            ? products.map(product =>
                <ProductCard key={product.id} product={product} />
              )
            : "Can't find the products"}
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
