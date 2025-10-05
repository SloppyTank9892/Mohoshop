import { useState } from 'react'

function Profile({ user, onUpdateProfile, onLogout, orders }) {
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState(user)

  const handleSaveProfile = () => {
    onUpdateProfile(profileData)
    setIsEditing(false)
  }

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-dark-100 font-display">Profile Information</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="btn-secondary"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      <div className="card p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">Username</label>
            {isEditing ? (
              <input
                type="text"
                value={profileData.username}
                onChange={(e) => setProfileData({...profileData, username: e.target.value})}
                className="input-field w-full"
              />
            ) : (
              <p className="text-dark-100">{profileData.username}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                className="input-field w-full"
              />
            ) : (
              <p className="text-dark-100">{profileData.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">Roblox Username</label>
            {isEditing ? (
              <input
                type="text"
                value={profileData.robloxUsername}
                onChange={(e) => setProfileData({...profileData, robloxUsername: e.target.value})}
                className="input-field w-full"
              />
            ) : (
              <p className="text-dark-100">{profileData.robloxUsername}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">Member Since</label>
            <p className="text-dark-100">{new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {isEditing && (
          <div className="mt-6 flex space-x-4">
            <button onClick={handleSaveProfile} className="btn-primary">
              Save Changes
            </button>
            <button onClick={() => setIsEditing(false)} className="btn-secondary">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  )

  const renderOrders = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-dark-100 font-display">Order History</h2>
      
      <div className="space-y-4">
        {orders.length === 0 ? (
          <div className="card p-8 text-center">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-dark-100 mb-2">No orders yet</h3>
            <p className="text-dark-300">Start shopping to see your orders here!</p>
          </div>
        ) : (
          orders.map((order, index) => (
            <div key={index} className="card p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-dark-100">Order #{order.id}</h3>
                  <p className="text-dark-300">Date: {order.date}</p>
                  <p className="text-dark-300">Items: {order.items.length}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-dark-100">${order.total}</p>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    order.status === 'completed' ? 'bg-green-100 text-green-800' : 
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-dark-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={onLogout}
            className="text-dark-300 hover:text-dark-100 transition-colors"
          >
            ← Back to Home
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${
                activeTab === 'profile'
                  ? 'border-dark-500 text-dark-100'
                  : 'border-transparent text-dark-300 hover:text-dark-100 hover:border-dark-300'
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${
                activeTab === 'orders'
                  ? 'border-dark-500 text-dark-100'
                  : 'border-transparent text-dark-300 hover:text-dark-100 hover:border-dark-300'
              }`}
            >
              Orders
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'profile' && renderProfile()}
        {activeTab === 'orders' && renderOrders()}
      </div>
    </div>
  )
}

export default Profile
