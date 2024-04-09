import React, { useEffect, useState } from 'react'
import ProductCard from './Products/ProductCard';
import { getLikedProducts } from '../apis/server-related_apis/server_operations';

export default function LikedProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const resProducts = await getLikedProducts();
      // console.log('liked products:', resProducts);
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
