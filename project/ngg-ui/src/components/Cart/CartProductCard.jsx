import React from 'react'
import ProductCard from '../Products/ProductCard'

export default function CartProductCard({ product }) {
  return (
    <div className='cart-product-card'>
      <ProductCard product={product} />
      
    </div>
  )
}

