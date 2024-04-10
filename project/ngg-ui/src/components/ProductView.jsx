import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { getProduct } from '../apis/server-related_apis/server_operations';
import QuantityController from './Products/QuantityController';

function ArrowRight(props) {
  return <div onClick={props.onClick} className="product-view-images-arrow slick-prev slick-arrow product-view-images-arrow-left">
    <img style={{ display: 'block', transform: 'rotate(180deg)', }} src="/images/next.png" alt="Arrow previous" />
  </div>;
}

function ArrowLeft(props) {
  return <div onClick={props.onClick} className="product-view-images-arrow slick-next slick-arrow product-view-images-arrow-right">
    <img src="/images/next.png" alt="Arrow next" />
  </div>;
}

function ProductImageSlider({ image_rfs }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowLeft />,
    prevArrow: <ArrowRight />,
  };
  image_rfs.push(image_rfs[0]);
  console.log(image_rfs);
  const productImages = image_rfs.map((img_rf, i) => (
    <div
      key={i}
      className="product-image"
    >
      <div
      style={{
        backgroundImage: 'url(/images/products_images/' + img_rf + ')',
        height: 700,
        display: 'block'
      }}></div>
      {/* <img src={'/images/products_images/' + img_rf} alt="." /> */}
    </div>
  ));
  return (
    <Slider {...settings} className='product-images-slider'>
      {productImages}
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
              <div className="product-view-general-inf">
                <div className="product-view-availability">
                  <span className="product-view-general-inf-label-wrap">Доступен</span> {product.availability ? 'В наличии' : 'Закончился'}
                </div>
              </div>
              <div className="product-view-desc">
                <h3 className="product-view-desc-title">Описание:</h3>
                <p className="product-view-desc-text">{product.description}</p>
              </div>
              <div className="product-view-add-to-cart-options">
                <div className="product-view-add-to-cart-option product-view-add-to-cart-option-color">
                  <h4 className="product-view-add-to-cart-option-title product-view-add-to-cart-option-title-color">Цвет:</h4>
                  <select className='product-view-add-to-cart-option-func' name="add_to_cart_color_opt">
                    <option selected value="default">Выберите цвет</option>
                    <option value="Ты не мой белый, нет, ты не мой белый">Белый</option>
                    <option value="Зелёный">Зелёный</option>
                  </select>
                </div>
                <div className="product-view-add-to-cart-option product-view-add-to-cart-option-color">
                  <h4 className="product-view-add-to-cart-option-title product-view-add-to-cart-option-title-size">Размер:</h4>
                  <select className='product-view-add-to-cart-option-func' name="add_to_cart_size_opt">
                    <option selected value="default">Выберите размер</option>
                    <option value="Ты не мой белый, нет, ты не мой белый">XL</option>
                    <option value="Зелёный">L</option>
                  </select>
                </div>
                <div className="product-view-add-to-cart-option product-view-add-to-cart-option-qty">
                  <h4 className="product-view-add-to-cart-option-title product-view-add-to-cart-option-title-qty">Кол-во:</h4>
                  <QuantityController className='product-view-add-to-cart-option-func' product={product} changeProductQuantity='' />
                </div>
              </div>
              <div className="product-view-bottom-buttons">
                <button className="default-4 product-view-bottom-button product-view-bottom-button-add-to-cart">
                  <img src="/images/image_5.png" alt="Cart" />
                  <span className="product-view-bottom-button-label product-view-bottom-button-label-add-to-cart">Добавить в корзину</span>
                </button>
                <button className="default-4 product-view-bottom-button product-view-bottom-button-add-to-lookbook">
                  <img src="/images/image_4.png" alt="Empty heart" />
                  <span className="product-view-bottom-button-label product-view-bottom-button-label-add-to-cart">Добавить в понравившиеся</span>
                </button>
              </div>
            </div>
          </div>
        }
      </section>
    </main>
  )
}

