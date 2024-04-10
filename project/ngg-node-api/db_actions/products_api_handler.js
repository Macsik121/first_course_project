const { query } = require('../db_actions/mysql');

async function getAllProducts() {
  const queryStr = `SELECT
    products.id, products.title, products.cost, products.description, products.shortDesc,
    product_colors.color, product_colors.hexCode,
    product_images_refs.image_ref
    FROM products
  `;
  const products = await query(queryStr);
  return products;
}

module.exports = {
  getAllProducts,
};
