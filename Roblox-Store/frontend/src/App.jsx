import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Shop from './components/Shop'
import About from './components/About'
import Footer from './components/Footer'
import Checkout from './components/Checkout'
import Cart from './components/Cart'
import Auth from './components/Auth'
import AdminPanel from './components/AdminPanel'
import LandingAuth from './components/LandingAuth'
import Profile from './components/Profile'
import CustomerCare from './components/CustomerCare'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')
  const [cartItems, setCartItems] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [qrCodeImage, setQrCodeImage] = useState('')
  const [user, setUser] = useState(null)
  const [orders, setOrders] = useState([])

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const handleRemoveItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId))
  }

  const handleProceedToCheckout = (items) => {
    setCurrentPage('checkout')
  }

  const handleCartClick = () => {
    setCurrentPage('cart')
  }

  const handleUserLogin = (userData) => {
    setUser(userData)
    setIsAuthenticated(true)
    setIsAdmin(false)
    setCurrentPage('home')
  }

  const handleAdminLogin = () => {
    setIsAuthenticated(true)
    setIsAdmin(true)
    setCurrentPage('admin')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setIsAdmin(false)
    setUser(null)
    setCurrentPage('landing')
  }

  const handleUpdateProfile = (updatedUser) => {
    setUser(updatedUser)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return (
          <LandingAuth
            onUserLogin={handleUserLogin}
            onAdminLogin={handleAdminLogin}
          />
        )
      case 'home':
        return (
          <>
            <Hero />
            <Shop onAddToCart={handleAddToCart} />
            <About />
          </>
        )
      case 'shop':
        return <Shop onAddToCart={handleAddToCart} />
      case 'about':
        return <About />
      case 'cart':
        return (
          <Cart
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onProceedToCheckout={handleProceedToCheckout}
            onBack={() => setCurrentPage('home')}
          />
        )
      case 'checkout':
        return (
          <Checkout
            cartItems={cartItems}
            onBack={() => setCurrentPage('cart')}
            qrCodeImage={qrCodeImage}
          />
        )
      case 'profile':
        return (
          <Profile
            user={user}
            onUpdateProfile={handleUpdateProfile}
            onLogout={handleLogout}
            orders={orders}
          />
        )
      case 'customer-care':
        return (
          <CustomerCare
            user={user}
            onBack={() => setCurrentPage('home')}
          />
        )
      case 'auth':
        return <Auth onLogin={handleAdminLogin} onBack={() => setCurrentPage('home')} />
      case 'admin':
        return (
          <AdminPanel
            onLogout={handleLogout}
            qrCodeImage={qrCodeImage}
            onQrCodeChange={setQrCodeImage}
          />
        )
      default:
        return (
          <>
            <Hero />
            <Shop onAddToCart={handleAddToCart} />
            <About />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-dark-900">
      {currentPage !== 'landing' && (
        <Header 
          currentPage={currentPage} 
          onPageChange={setCurrentPage}
          isAdmin={isAdmin}
          onAdminAccess={() => setCurrentPage('auth')}
          onLogout={handleLogout}
          cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
          onCartClick={handleCartClick}
          user={user}
        />
      )}
      {renderPage()}
      {currentPage !== 'admin' && <Footer />}
    </div>
  )
}

export default App
