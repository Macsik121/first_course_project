import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { getAllProducts } from '../../apis/server-related_apis/server_operations';

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const resProducts = await getAllProducts();
      setProducts(resProducts);
    })();
  });
  const drawnProducts = products.map(product => (
    <ProductCard product={product} key={product.id} />
  ));
  return (
    <main className='main main-products'>
      <section className="products-section page-section">
        <h2 className="products-page-title section-title">Наши продукты:</h2>
        <div className="products">
          {drawnProducts}
        </div>
      </section>
    </main>
  )
}
