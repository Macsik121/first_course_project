import React from 'react'
import { Link } from 'react-router-dom';
import { djangoFetchFreeze } from '../../apis/server-related_apis/fetch';
import QuantityController from './QuantityController';

async function likeProduct(id) {
  const token = localStorage.getItem('token');
  await djangoFetchFreeze(document.querySelector('.products'), { url: 'product/like-a-product', method: 'POST', variables: { id, token, }, });
}

async function addToCart(id) {
  const token = localStorage.getItem('token');
  await djangoFetchFreeze(document.querySelector('.products'), { url: 'add-to-cart', method: 'POST', variables: { id, token, }, });
}

export default function ProductCard({
  product,
  // : {
    // id = 1,
    // title = '',
    // image_rfs = [''],
    // availability = true,
    // cost = 0
    // description = '',
    // color = [''],
  // },
  isInCart = false,
  quantityControllerOn = false,
  changeProductQuantity,
}) {
  const bgUrl = 'url(/images/products_images' + product.image_rfs[0] + ')';
  return (
    <div className='product-card'>
      <div className="product-card-top-part product-card-part">
        <span className="product-card-cost"><sup>&#8381;</sup>{product.cost}</span>
        <div style={{ backgroundImage: bgUrl, }} className='product-card-bg' />
        <Link to={"/view-product/" + product.id} className="product-card-product-view-ref"></Link>
      </div>
      <div className="product-card-bottom-part product-card-part">
        <h3 className="product-card-title">{product.title}</h3>
        <p className="product-card-short-desc">{product.shortDesc}</p>
        <div className="product-card-hover-functions">
          <button onClick={() => addToCart(product.id)} className="product-card-hover-function-btn product-card-hover-function-btn-cart"><img src="/images/image_11.png" alt="Cart" /></button>
          <button onClick={() => likeProduct(product.id)} className="product-card-hover-function-btn product-card-hover-function-btn-like" title={product.product_liked ? 'Продукт добавлен в понравившиеся' : ''}><img src={product.product_liked ? "/images/filled_heart.png" : "/images/image_4.png"} alt="Like" /></button>
        </div>
      </div>
      {quantityControllerOn &&
        <QuantityController product={product} changeProductQuantity={''} />
      }
      {isInCart &&
        <QuantityController product={product} changeProductQuantity={'() => {}'} />
      }
    </div>
  );
}
