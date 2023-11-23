import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , EffectFade } from "swiper/modules";
import { useState, useRef } from "react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const ProductCard = ({ product }) => {
  const swiperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleImgHover = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(1); 
      setIsHovered(true);
    }
  };

  const handleImgLeave = () => {
    if (swiperRef.current && isHovered) {
      swiperRef.current.swiper.slideTo(0); // Switch directly to the first slide
      setIsHovered(false);
    }
  };

  return (
    <div className="product-card" >
      <div className="product-card__img" onMouseEnter={handleImgHover} onMouseLeave={handleImgLeave}>
      <>
      <Swiper ref={swiperRef} speed={400} navigation={true} modules={[Navigation, EffectFade]} className="mySwiper" effect="fade" >
        <SwiperSlide><img src={product.images[0]}/></SwiperSlide>
        <SwiperSlide><img src={product.images[1]}/></SwiperSlide>
        <SwiperSlide><img src={product.images[2]}/></SwiperSlide>
        <SwiperSlide><img src={product.images[3]}/></SwiperSlide>
      </Swiper>
    </>
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
