// Products , addToCart
function ProductList({ products, addToCartBtn }) {
  return (
    <div className="product-details">
      {products.map(product => (
        <div key={product.id} className="card">
          <img
            src={product.image}
            alt={product.title}
            className="product-pic"
          />

          <p className="product-name">{product.title}</p>
          <p className="product-amount">Rs {product.price}</p>

          <button className = "add-to-cart" onClick={() => addToCartBtn(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
