import { djangoFetchFreeze } from "../../apis/server-related_apis/fetch";

export default function QuantityController({ product, changeProductQuantity, className }) {
  return (
    <div className={"product-quantity-controller " + className}>
      <input className="product-quantity-controller-display" value={product.amount || 1} onChange={"changeProductQuantity"} />
      <div className="product-quantity-controller-arrows">
        <div
          onClick={() => (
            changeProductQuantity
              ? changeProductQuantity(1, product.id)
              : () => {
                (async () => await djangoFetchFreeze(document.querySelector('.products'), { url: 'product/get-all-products' }))();
              }
            )
          }
          className="product-quantity-controller-arrow arrow-up"
        >
          <img style={{ transform: 'rotate(180deg)', }} src="/images/image_7.png" alt="" />
        </div>
        <div
          onClick={() => (
            changeProductQuantity
              ? changeProductQuantity(1, product.id)
              : () => {
                (async () => await djangoFetchFreeze(document.querySelector('.products'), { url: '' }))();
              }
            )
          }
          className="product-quantity-controller-arrow arrow-down"
        >
          <img src="/images/image_7.png" alt="" />
        </div>
      </div>
    </div>
  );
}
