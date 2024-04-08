import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import djangoFetch from '../apis/fetch';

function ProductImageSlider({ image_rfs }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const productImages = image_rfs.map((img_rf, i) => <div key={i} className="product-image"><img src={img_rf} alt="." /></div>);
  return (
    <Slider {...settings} className='product-images-slider'>
      {productImages}
      {/* <div>
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
      </div> */}
    </Slider>
  );
}

export default function ProductView() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const products = await djangoFetch({ url: 'product/get-all-products', variables: {
          productsId: id,
        },
      });
      setProduct(products[0]);
    })();
  }, []);
  console.log('product view product:', product);
  return (
    <main>
      <section className="product-view page-section">
        {Object.keys(product) > 1 &&
          <div className="product-view-wrap">
            <div className="product-view-images">
              <ProductImageSlider image_rfs={product.image_rfs} />
            </div>
            <div className="product-view-content">
              <h2 className="product-view-title">{product.title}</h2>
            </div>
          </div>
        }
      </section>
    </main>
  )
}

