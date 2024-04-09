import React, { useEffect, useState } from 'react';
import ProductCard from './Products/ProductCard';
import { getCartProducts } from '../apis/server-related_apis/server_operations';

export default function Cart() {
  const [products, setProducts] = useState([]);
  let paymentSum = 0;
  
  function changeProductQuantity(e, id) {
    const changingProduct = products[products.findIndex((product) => product.id === id)];
    if (typeof e === 'number') changingProduct.id += e;
    else if (e.target.value === 'number') changingProduct.id = e.target.value;
    else throw Error('Product Quantity couldnt change:(');
  }
  
  useEffect(() => {
    (async () => {
      const cartProducts = await getCartProducts();
      // console.log(cartProducts);
      setProducts(cartProducts);
    })();
  }, []);
  const drawnProducts = products.map(product => {
    product.amount = product.amount ? product.amount : 1;
    paymentSum += product.cost * product.amount;
    return <ProductCard key={product.id} product={product} isInCart={true} />
  });
  return (
    <main>
      <section className="products-cart page-section">
        <h2 className="section-title">Ваша корзина:</h2>
        <div className="products cart-products">
          {drawnProducts}
        </div>
        <div className="cart-bottom-section">
          <div className="border-line border-line-horizontal"></div>
          <div className="payment-sum">Сумма покупки составляет: {paymentSum}</div>
          <button className="default-4 default-4-light cart-buy-button">Оплатить</button>
        </div>
      </section>
    </main>
  )
}
