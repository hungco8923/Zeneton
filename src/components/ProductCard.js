const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={product.thumbnail[0]} />
      </div>
      <div className="product-card__content">
        <div className="product-card__content__title">
          <p>
            {product.title}
          </p>
        </div>
        <div className="product-card__content__price">
          {product.price} đ
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
