import { useState } from 'react'

function CustomerCare({ user, onBack }) {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'customer',
      text: 'Hi, I have a question about my order',
      timestamp: '2025-01-04 14:30',
      isRead: true
    },
    {
      id: 2,
      sender: 'seller',
      text: 'Hello! I\'d be happy to help you with your order. What\'s your order number?',
      timestamp: '2025-01-04 14:32',
      isRead: true
    },
    {
      id: 3,
      sender: 'customer',
      text: 'My order number is #12345. When will it be delivered?',
      timestamp: '2025-01-04 14:35',
      isRead: true
    },
    {
      id: 4,
      sender: 'seller',
      text: 'Your order #12345 is being processed and will be delivered within 24 hours. You\'ll receive a notification when it\'s ready!',
      timestamp: '2025-01-04 14:37',
      isRead: true
    }
  ])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'customer',
        text: message,
        timestamp: new Date().toLocaleString(),
        isRead: false
      }
      setMessages([...messages, newMessage])
      setMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-dark-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="text-dark-300 hover:text-dark-100 transition-colors"
          >
            ← Back to Home
          </button>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-dark-100 font-display">Customer Care</h2>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-dark-300 text-sm">Online</span>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto border border-dark-700 rounded-lg p-4 mb-6 bg-dark-800">
            {messages.length === 0 ? (
              <div className="text-center text-dark-300">
                <div className="text-4xl mb-2">💬</div>
                <p>Start a conversation with our support team!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'customer' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.sender === 'customer' 
                        ? 'bg-dark-700 text-dark-100' 
                        : 'bg-dark-600 text-dark-100'
                    }`}>
                      <p className="text-sm">{msg.text}</p>
                      <p className="text-xs text-dark-400 mt-1">{msg.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="flex space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="input-field flex-1"
            />
            <button
              type="submit"
              className="btn-primary"
            >
              Send
            </button>
          </form>

          {/* Quick Actions */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-dark-100 mb-3">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="card p-4 text-left hover:scale-105 transition-all duration-300">
                <h4 className="font-semibold text-dark-100 mb-2">Track Order</h4>
                <p className="text-dark-300 text-sm">Check your order status</p>
              </button>
              <button className="card p-4 text-left hover:scale-105 transition-all duration-300">
                <h4 className="font-semibold text-dark-100 mb-2">Refund Request</h4>
                <p className="text-dark-300 text-sm">Request a refund</p>
              </button>
              <button className="card p-4 text-left hover:scale-105 transition-all duration-300">
                <h4 className="font-semibold text-dark-100 mb-2">Report Issue</h4>
                <p className="text-dark-300 text-sm">Report a problem</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerCare
