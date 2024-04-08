import React, { useEffect, useState } from 'react'
import djangoFetch from '../../apis/fetch';
import CartProduct from './CartProductCard';

export default function Cart() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const cartProducts = await djangoFetch({
        url: 'product/get-all-products',
        variables: { token: localStorage.getItem('token'), },
      });
      setProducts(cartProducts);
    })();
  }, []);
  const drawnProducts = products.map(product => <CartProduct key={product.id} product={product} />);
  return (
    <main>
      <section className="products-cart page-section">
        <h2 className="section-title">Ваша корзина:</h2>
        <div className="products cart-products">
          {drawnProducts}
        </div>
        <div className="cart-buttons">
          <button className="default-4"></button>
          <button className="default-4"></button>
        </div>
      </section>
    </main>
  )
}
