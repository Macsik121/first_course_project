import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { getProduct } from '../apis/server-related_apis/server_operations';

function ProductImageSlider({ image_rfs }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div className="product-view-images-arrow product-view-images-arrow-right"><img src="/images/next.png" alt="Arrow next" /></div>,
    prevArrow: <div className="product-view-images-arrow product-view-images-arrow-left"><img style={{ transform: 'rotate(180deg)', }} src="/images/next.png" alt="Arrow previous" /></div>,
  };
  const productImages = image_rfs.map((img_rf, i) => <div key={i} className="product-image"><img src={'/images/products_images/' + img_rf} alt="." /></div>);
  return (
    <Slider {...settings} className='product-images-slider'>
      {productImages}
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}

export default function ProductView() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const product = await getProduct(id);
      setProduct(product);
      console.log(product);
    })();
  }, []);
  return (
    <main>
      <section className="product-view page-section">
        {Object.keys(product).length > 1 &&
          <div className="product-view-wrap">
            <div className="product-view-images">
              <ProductImageSlider image_rfs={product.image_rfs} />
            </div>
            <div className="product-view-content">
              <h2 className="product-view-title section-title">{product.title}</h2>
              <div className="product-view-cost"><sup>&#8381;</sup>{product.cost}</div>
              <div className="product-view-availability">Доступен: {product.availability ? 'В наличии' : 'Закончился'}</div>
              <div className="product-view-desc">
                <h3 className="product-view-desc-title">Описание:</h3>
                <p className="product-view-desc-text">{product.description}</p>
              </div>
              <div className="product-view-add-to-cart-options">
                <div className="product-view-add-to-cart-option product-view-add-to-cart-option-color">
                  <h4 className="product-view-add-to-cart-option-title product-view-add-to-cart-option-title-color">Цвет:</h4>
                  <select name="add_to_cart_color_opt">
                    <option value="Ты не мой белый, нет, ты не мой белый">Белый</option>
                    <option value="Зелёный">Зелёный</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        }
      </section>
    </main>
  )
}

