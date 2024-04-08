import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import djangoFetch from '../../apis/fetch';
// import { products as productsData } from '../../apis/hardcoded_data';

export default function Products() {
  let productsData = [];
  const [products, setProducts] = useState(productsData || []);
  useEffect(() => {
    if (products.length < 1) {
      (async () => {
        const resProducts = await djangoFetch({ url: 'product/get-all-products', });
        resProducts[0].description = 'Футболка';
        resProducts[0].cost = 499.23;
        resProducts[0].shortDesc = '12=3-12-09408403-';
        resProducts[0].color = [''];
        resProducts[0].image_rfs = ['/t-shirt/t-shirt-main.jpg',];
        resProducts[1].description = 'Описание';
        resProducts[1].cost = 300.90;
        resProducts[1].shortDesc = '12=3-12-09408403-';
        resProducts[1].color = [''];
        resProducts[1].image_rfs = ['/cup_images/cup-main.jpg',];
        resProducts[2].description = 'бролкъ';
        resProducts[2].shortDesc = '12=3-12-09408403-';
        resProducts[2].cost = 149.99;
        resProducts[2].color = [''];
        resProducts[2].image_rfs = ['/keychain.jpg',];
        console.log(resProducts);
        setProducts(resProducts);
      })();
    }
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
