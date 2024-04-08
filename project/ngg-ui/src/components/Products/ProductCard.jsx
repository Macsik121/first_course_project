import React from 'react'
import { Link } from 'react-router-dom';

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
}) {
  console.log('/images/products_images' + product.image_rfs[0]);
  const bgUrl = 'url(/images/products_images' + product.image_rfs[0] + ')';
  return (
    <div className='product-card'>
      <div className="product-card-top-part product-card-part">
        <span className="product-card-cost"><sup>&#8381;</sup>{product.cost}</span>
        <div style={{ backgroundImage: bgUrl, }} className='product-card-bg' />
        <Link to={"view-product/" + product.id} className="product-card-product-view-ref"></Link>
      </div>
      <div className="product-card-bottom-part product-card-part">
        <h3 className="product-card-title">{product.title}</h3>
        <p className="product-card-short-desc">{product.shortDesc}</p>
        <div className="product-card-hover-functions">
          <button className="product-card-hover-function-btn product-card-hover-function-btn-cart"><img src="/images/image_11.png" alt="Cart" /></button>
          <button className="product-card-hover-function-btn product-card-hover-function-btn-like"><img src="/images/image_4.png" alt="Like" /></button>
        </div>
      </div>
    </div>
  )
}
