import { useState } from 'react'
import ProductCard from './ProductCard'

function Shop({ onAddToCart }) {
  const [sortBy, setSortBy] = useState('default')
  
  // Sample products data - in a real app this would come from an API
  const [products] = useState([
    {
      id: 1,
      name: "Golden Dragon Pet",
      price: 150,
      image: "https://via.placeholder.com/300x200/FFD700/000000?text=Golden+Dragon",
      description: "Rare golden dragon pet with special abilities"
    },
    {
      id: 2,
      name: "Rainbow Unicorn",
      price: 200,
      image: "https://via.placeholder.com/300x200/FF69B4/FFFFFF?text=Rainbow+Unicorn",
      description: "Magical rainbow unicorn with rainbow trail"
    },
    {
      id: 3,
      name: "Shadow Wolf",
      price: 120,
      image: "https://via.placeholder.com/300x200/2F2F2F/FFFFFF?text=Shadow+Wolf",
      description: "Mysterious shadow wolf with dark powers"
    },
    {
      id: 4,
      name: "Fire Phoenix",
      price: 300,
      image: "https://via.placeholder.com/300x200/FF4500/FFFFFF?text=Fire+Phoenix",
      description: "Legendary fire phoenix that never dies"
    },
    {
      id: 5,
      name: "Ice Dragon",
      price: 180,
      image: "https://via.placeholder.com/300x200/00BFFF/FFFFFF?text=Ice+Dragon",
      description: "Powerful ice dragon with freezing breath"
    },
    {
      id: 6,
      name: "Lightning Tiger",
      price: 250,
      image: "https://via.placeholder.com/300x200/FFD700/000000?text=Lightning+Tiger",
      description: "Electric tiger with lightning speed"
    }
  ])

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name-a':
        return a.name.localeCompare(b.name)
      case 'name-z':
        return b.name.localeCompare(a.name)
      default:
        return 0
    }
  })

  return (
    <section className="py-16 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl font-bold text-dark-100 mb-4 font-display">Shop</h2>
          <p className="text-lg text-dark-300">Explore our products</p>
        </div>

        {/* Sort Options */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSortBy('default')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                sortBy === 'default' ? 'bg-dark-700 text-dark-100' : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-dark-100'
              }`}
            >
              Default
            </button>
            <button
              onClick={() => setSortBy('price-low')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                sortBy === 'price-low' ? 'bg-dark-700 text-dark-100' : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-dark-100'
              }`}
            >
              Price: Low to High
            </button>
            <button
              onClick={() => setSortBy('price-high')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                sortBy === 'price-high' ? 'bg-dark-700 text-dark-100' : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-dark-100'
              }`}
            >
              Price: High to Low
            </button>
            <button
              onClick={() => setSortBy('name-a')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                sortBy === 'name-a' ? 'bg-dark-700 text-dark-100' : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-dark-100'
              }`}
            >
              Name: A to Z
            </button>
            <button
              onClick={() => setSortBy('name-z')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                sortBy === 'name-z' ? 'bg-dark-700 text-dark-100' : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-dark-100'
              }`}
            >
              Name: Z to A
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop
