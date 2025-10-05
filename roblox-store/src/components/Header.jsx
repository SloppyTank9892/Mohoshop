import { useState } from 'react'

function Header({ currentPage, onPageChange, isAdmin, onAdminAccess, onLogout, cartItemCount, onCartClick, user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-dark-800 shadow-2xl border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-dark-100 font-display">Moha's Shop</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => onPageChange('home')}
              className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${
                currentPage === 'home' ? 'text-dark-100 bg-dark-700 px-4 py-2 rounded-lg' : 'text-dark-300 hover:text-dark-100'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onPageChange('shop')}
              className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${
                currentPage === 'shop' ? 'text-dark-100 bg-dark-700 px-4 py-2 rounded-lg' : 'text-dark-300 hover:text-dark-100'
              }`}
            >
              Shop
            </button>
            <button
              onClick={() => onPageChange('about')}
              className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${
                currentPage === 'about' ? 'text-dark-100 bg-dark-700 px-4 py-2 rounded-lg' : 'text-dark-300 hover:text-dark-100'
              }`}
            >
              About
            </button>
            {user && (
              <>
                <button
                  onClick={() => onPageChange('profile')}
                  className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${
                    currentPage === 'profile' ? 'text-dark-100 bg-dark-700 px-4 py-2 rounded-lg' : 'text-dark-300 hover:text-dark-100'
                  }`}
                >
                  Profile
                </button>
                <button
                  onClick={() => onPageChange('customer-care')}
                  className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${
                    currentPage === 'customer-care' ? 'text-dark-100 bg-dark-700 px-4 py-2 rounded-lg' : 'text-dark-300 hover:text-dark-100'
                  }`}
                >
                  Support
                </button>
              </>
            )}
            {isAdmin ? (
              <>
                <button
                  onClick={() => onPageChange('admin')}
                  className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${
                    currentPage === 'admin' ? 'text-dark-100 bg-dark-700 px-4 py-2 rounded-lg' : 'text-dark-300 hover:text-dark-100'
                  }`}
                >
                  Admin Panel
                </button>
                <button
                  onClick={onLogout}
                  className="text-lg font-medium text-red-400 hover:text-red-300 transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-red-900/20"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={onAdminAccess}
                className="text-lg font-medium text-dark-300 hover:text-dark-100 transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-dark-700"
              >
                Admin
              </button>
            )}
          </nav>

          {/* Cart Icon */}
          {!isAdmin && (
            <div className="flex items-center">
              <button
                onClick={onCartClick}
                className="relative p-2 text-dark-300 hover:text-dark-100 transition-all duration-300 hover:scale-110 hover:bg-dark-700 rounded-lg"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-300 hover:text-dark-100 focus:outline-none focus:text-dark-100 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-dark-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-700 rounded-lg mt-2 shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => {
                  onPageChange('home')
                  setIsMenuOpen(false)
                }}
                className={`block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 hover:scale-105 rounded-lg ${
                  currentPage === 'home' ? 'text-dark-100 bg-dark-600' : 'text-dark-300 hover:text-dark-100 hover:bg-dark-600'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  onPageChange('shop')
                  setIsMenuOpen(false)
                }}
                className={`block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 hover:scale-105 rounded-lg ${
                  currentPage === 'shop' ? 'text-dark-100 bg-dark-600' : 'text-dark-300 hover:text-dark-100 hover:bg-dark-600'
                }`}
              >
                Shop
              </button>
              <button
                onClick={() => {
                  onPageChange('about')
                  setIsMenuOpen(false)
                }}
                className={`block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 hover:scale-105 rounded-lg ${
                  currentPage === 'about' ? 'text-dark-100 bg-dark-600' : 'text-dark-300 hover:text-dark-100 hover:bg-dark-600'
                }`}
              >
                About
              </button>
              {user && (
                <>
                  <button
                    onClick={() => {
                      onPageChange('profile')
                      setIsMenuOpen(false)
                    }}
                    className={`block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 hover:scale-105 rounded-lg ${
                      currentPage === 'profile' ? 'text-dark-100 bg-dark-600' : 'text-dark-300 hover:text-dark-100 hover:bg-dark-600'
                    }`}
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      onPageChange('customer-care')
                      setIsMenuOpen(false)
                    }}
                    className={`block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 hover:scale-105 rounded-lg ${
                      currentPage === 'customer-care' ? 'text-dark-100 bg-dark-600' : 'text-dark-300 hover:text-dark-100 hover:bg-dark-600'
                    }`}
                  >
                    Support
                  </button>
                </>
              )}
              {isAdmin ? (
                <>
                  <button
                    onClick={() => {
                      onPageChange('admin')
                      setIsMenuOpen(false)
                    }}
                    className={`block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 hover:scale-105 rounded-lg ${
                      currentPage === 'admin' ? 'text-dark-100 bg-dark-600' : 'text-dark-300 hover:text-dark-100 hover:bg-dark-600'
                    }`}
                  >
                    Admin Panel
                  </button>
                  <button
                    onClick={() => {
                      onLogout()
                      setIsMenuOpen(false)
                    }}
                    className="block px-3 py-2 text-base font-medium w-full text-left text-red-400 hover:text-red-300 transition-all duration-300 hover:scale-105 rounded-lg hover:bg-red-900/20"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    onAdminAccess()
                    setIsMenuOpen(false)
                  }}
                  className="block px-3 py-2 text-base font-medium w-full text-left text-dark-300 hover:text-dark-100 transition-all duration-300 hover:scale-105 rounded-lg hover:bg-dark-600"
                >
                  Admin
                </button>
              )}
              {!isAdmin && (
                <button
                  onClick={() => {
                    onCartClick()
                    setIsMenuOpen(false)
                  }}
                  className="block px-3 py-2 text-base font-medium w-full text-left text-dark-300 hover:text-dark-100 transition-all duration-300 hover:scale-105 rounded-lg hover:bg-dark-600"
                >
                  Cart ({cartItemCount})
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
