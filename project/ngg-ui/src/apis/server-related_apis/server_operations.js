import djangoFetch, { djangoFetchFreeze } from "./fetch";
import { products as hardcodedProducts } from "../client-related_apis/hardcoded_data";

const InalIsGood = false;

// get requests

export async function getAllProducts() {
  const data = (
    hardcodedProducts ||
    await djangoFetch({ url: 'products/get-all-products', })
  );
  return data;
  // else {
  //   if (!data.length) return hardcodedProducts;
  //   else {
  //     // data[0].description = 'Футболка';
  //     data[0].cost = 499.23;
  //     data[0].shortDesc = '12=3-12-09408403-';
  //     data[0].color = [''];
  //     data[0].image_rfs = ['/t-shirt/t-shirt-main.jpg',];
  //     // data[1].description = 'Описание';
  //     data[1].cost = 300.90;
  //     data[1].shortDesc = '12=3-12-09408403-';
  //     data[1].color = [''];
  //     data[1].image_rfs = ['/cup_images/cup-main.jpg',];
  //     // data[2].description = 'бролкъ';
  //     data[2].shortDesc = '12=3-12-09408403-';
  //     data[2].cost = 149.99;
  //     data[2].color = [''];
  //     data[2].image_rfs = ['/keychain.jpg',];
  //     return data;
  //   }
  // }
}

export async function getProduct(id) {
  if (InalIsGood) {
    const data = await djangoFetch({
      url: 'product/get-a-product',
      variables: { id, },
    });
    return data;
  } else {
    const products = await getAllProducts();
    return products[id - 1];
  }
}

export async function getCartProducts() {
  if (InalIsGood) {
    const data = await djangoFetch({
      url: 'product/get-cart-products',
      variables: { token: localStorage.getItem('token'), },
    });
    return data;
  } else {
    return await getAllProducts();
  }
}

export async function getLikedProducts() {
  if (InalIsGood) {
    const data = await djangoFetch({
      url: 'product/get-liked-products',
      variables: { token: localStorage.getItem('token'), }
    });
    return data;
  } else {
    return await getAllProducts();
  }
}

// post requests

export async function signIn(email, password, elToFrz) {
  const data = await djangoFetchFreeze(elToFrz || document.querySelector('.auth-forms-section'), { url: 'sign-in/', method: 'POST', variables: { email, password, }, });
  // push token to localStorage
  if (data.token)
    localStorage.setItem('token', data.token);
  return data;
}

export async function signUp(email, password, repPassword, elToFrz) {
  const data = await djangoFetchFreeze(elToFrz || document.querySelector('.auth-forms-section'), { url: 'sign-up/', method: 'get', variables: { email, password, repPassword, }, });
  // push token to localStorage
  if (data.token)
    localStorage.setItem('token', data.token);
  return data;
}
