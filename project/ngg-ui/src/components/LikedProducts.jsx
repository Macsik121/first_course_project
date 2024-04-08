import React, { useEffect, useState } from 'react'
import djangoFetch from '../apis/fetch';
import ProductCard from './Products/ProductCard';

export default function LikedProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const resProducts = await djangoFetch({ url: 'product/get-all-products', });
      console.log('liked products:', resProducts);
      setProducts(resProducts);
    })();
  }, []);
  const drawnProducts = products.map(product => <ProductCard product={product} />);
  return (
    <main>
      <section className="liked-products-cards page-section">
        <h2 className="liked-products-cards-title section-title">Понравившиеся продукты</h2>
        <div className="liked-products products">
          {drawnProducts}
        </div>
      </section>
    </main>
  )
}
