import { useState } from 'react'

function Checkout({ cartItems, onBack, qrCodeImage }) {
  const [robloxUsername, setRobloxUsername] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'customer', timestamp: new Date() }])
      setMessage('')
    }
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    if (robloxUsername && email) {
      setOrderPlaced(true)
      // In a real app, this would send the order to the backend
      console.log('Order placed:', { cartItems, robloxUsername, email })
    }
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No item selected</h2>
          <button
            onClick={onBack}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Back to Shop
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h2>
            
            {/* Items Details */}
            <div className="mb-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Order Summary</h3>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-blue-600">${item.price * item.quantity}</p>
                    <p className="text-sm text-gray-500">${item.price} each</p>
                  </div>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-blue-600">${calculateTotal()}</span>
                </div>
              </div>
            </div>

            {!orderPlaced ? (
              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Roblox Username *
                  </label>
                  <input
                    type="text"
                    value={robloxUsername}
                    onChange={(e) => setRobloxUsername(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your Roblox username"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Place Order
                </button>
              </form>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Order Placed Successfully!</h3>
                  <p className="text-gray-600 mb-4">
                    Please scan the QR code below to complete your payment:
                  </p>
                  
                  {/* QR Code */}
                  <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 inline-block">
                    {qrCodeImage ? (
                      <div className="w-48 h-48 flex items-center justify-center">
                        <img
                          src={qrCodeImage}
                          alt="Payment QR Code"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-48 h-48 bg-gray-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-2">📱</div>
                          <p className="text-sm text-gray-600">UPI QR Code</p>
                          <p className="text-xs text-gray-500">Scan to pay ${calculateTotal()}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> After payment, you will receive your item in-game within 24 hours. 
                    Make sure to keep your Roblox username ready for the trade.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Chat Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Seller</h3>
            
            {/* Messages */}
            <div className="h-64 overflow-y-auto border border-gray-200 rounded-lg p-4 mb-4">
              {messages.length === 0 ? (
                <p className="text-gray-500 text-center">No messages yet. Start a conversation!</p>
              ) : (
                messages.map((msg, index) => (
                  <div key={index} className={`mb-3 ${msg.sender === 'customer' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block max-w-xs px-3 py-2 rounded-lg ${
                      msg.sender === 'customer' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-900'
                    }`}>
                      {msg.text}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {msg.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

