import React, { useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode';
import ProductCard from './Products/ProductCard'
import djangoFetch from '../apis/fetch';
// import { products as productsData } from '../apis/hardcoded_data';

export default function Home() {
  let productsData = [];
  const [products, setProducts] = useState(productsData || []);
  useEffect(() => {
    (async () => {
      if (products.length < 1) {
        const resProducts = await djangoFetch({ url: 'product/get-all-products', });
        console.log(resProducts);
        resProducts.push(Object.assign({}, resProducts[0]));
        resProducts[resProducts.length - 1].id = resProducts.length + 1;
        resProducts.push(Object.assign({}, resProducts[0]));
        resProducts[resProducts.length - 1].id = resProducts.length + 1;
        setProducts(resProducts);
      }
    })();
    console.log(jwtDecode(localStorage.getItem('token')));
  }, []);
  const drawnProducts = products.map(product => <ProductCard product={product} key={product.id} />);
  return (
    <main className="main main-home">
      <section className="home-products products-section page-section">
        <div className="border" />
        <div className="products">
          {drawnProducts}
        </div>
        <div className="border-copy" />
      </section>
      <section className="lookbook-3 page-section">
        <div className="link-cards">
          <div className="women link-card">
            <h3 className="text-18">
              Мерч
              <br />
              <strong className="fw700">ИВТ<span style={{ textTransform: 'lowercase' }}>и</span>ПТ</strong>
            </h3>
            <div className="text-19">
              <p>Посмотрите продукты с невероятным дизайном, которые мы придумали с нашей командой!<br />
              Если вам понравиться, можете приобрести, таким образом поддержав создателей и сам факультет!</p>
            </div>
            <a href='/products' className="default-4">Перейти</a>
          </div>
          <div className="you link-card">
            <div className="you-content-wrap">
              <h3 className="text-21">
                <strong className="fw700">Продукты</strong><br />в избранном
              </h3>
              <div className="text-90">
                <p>Просмотрите продукты, которые вы добавили в избранное, чтобы попозже их же просмотреть.</p>
              </div>
              <a href="/liked-products" className="default-4">
                Перейти
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

