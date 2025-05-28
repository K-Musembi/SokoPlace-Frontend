function ProductDetailsCard({ product, onAddToCart }) {
  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p><strong>Specifications:</strong> {product.specs}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Availability:</strong> {product.stockStatus || 'In stock'}</p>
      <button onClick={onAddToCart}>Add To Cart</button>
    </div>
  )
}

export default ProductDetailsCard
