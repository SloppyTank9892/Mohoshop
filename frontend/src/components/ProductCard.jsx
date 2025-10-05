function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card overflow-hidden animate-slide-up">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-dark-100 mb-2 font-display">{product.name}</h3>
        <p className="text-dark-300 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-dark-100">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
