import { useState } from 'react'

function Cart({ cartItems, onUpdateQuantity, onRemoveItem, onProceedToCheckout, onBack }) {
  const [isCheckout, setIsCheckout] = useState(false)

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      onRemoveItem(itemId)
    } else {
      onUpdateQuantity(itemId, newQuantity)
    }
  }

  const handleCheckout = () => {
    setIsCheckout(true)
    onProceedToCheckout(cartItems)
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-dark-900 text-dark-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={onBack}
              className="text-dark-300 hover:text-dark-100 transition-colors"
            >
              ← Back to Shop
            </button>
          </div>
          
          <div className="card p-8 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-dark-100 mb-4">Your cart is empty</h2>
            <p className="text-dark-300 mb-6">Add some items to your cart to get started!</p>
            <button
              onClick={onBack}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-900 text-dark-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="text-dark-300 hover:text-dark-100 transition-colors"
          >
            ← Back to Shop
          </button>
        </div>

        <div className="card p-8">
          <h2 className="text-2xl font-bold text-dark-100 mb-6">Shopping Cart</h2>
          
          <div className="space-y-4">
            {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border border-dark-700 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-dark-100">{item.name}</h3>
                  <p className="text-dark-300 text-sm">{item.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-dark-100">${item.price * item.quantity}</p>
                    <p className="text-sm text-dark-300">${item.price} each</p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-semibold text-dark-100">Total:</span>
              <span className="text-2xl font-bold text-blue-600">${calculateTotal()}</span>
            </div>
            
            <div className="flex space-x-4">
              <button onClick={onBack} className="flex-1 bg-dark-700 text-dark-100 py-3 rounded-lg hover:bg-dark-600 transition-colors">Continue Shopping</button>
              <button onClick={handleCheckout} className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
