import { products } from './hardcoded_data';

export default async function djangoFetch({ url = '', variables = {}, method = 'GET', }) {
  console.log(variables);
  const result = await fetch('http://localhost:8000/api/' + url,
  {
    method: method.toUpperCase(),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: method === 'POST' ? JSON.stringify(variables) : null,
  }
  );
  const data = await result.json();
  if (url === 'product/get-all-products' && Object.keys(data[0]) < Object.keys(products[0])) {
    data[0].description = 'Футболка';
    data[0].cost = 499.23;
    data[0].shortDesc = '12=3-12-09408403-';
    data[0].color = [''];
    data[0].image_rfs = ['/t-shirt/t-shirt-main.jpg',];
    data[1].description = 'Описание';
    data[1].cost = 300.90;
    data[1].shortDesc = '12=3-12-09408403-';
    data[1].color = [''];
    data[1].image_rfs = ['/cup_images/cup-main.jpg',];
    data[2].description = 'бролкъ';
    data[2].shortDesc = '12=3-12-09408403-';
    data[2].cost = 149.99;
    data[2].color = [''];
    data[2].image_rfs = ['/keychain.jpg',];
  }
  return data;
}
