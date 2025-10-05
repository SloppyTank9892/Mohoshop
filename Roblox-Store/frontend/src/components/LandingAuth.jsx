import { useState } from 'react'

export default function LandingAuth({ onUserLogin, onAdminLogin }) {
  const [isUserAuth, setIsUserAuth] = useState(true)
  const [isRegistering, setIsRegistering] = useState(false)
  const [userForm, setUserForm] = useState({ email: '', password: '', confirmPassword: '', username: '', robloxUsername: '' })
  const [adminForm, setAdminForm] = useState({ email: '', password: '' })

  const handleUserSubmit = (e) => {
    e.preventDefault()
    if (userForm.email && userForm.password) onUserLogin && onUserLogin(userForm)
  }

  const handleRegister = (e) => {
    e.preventDefault()
    if (!userForm.email || !userForm.password) return alert('Please fill email and password')
    if (userForm.password !== userForm.confirmPassword) return alert('Passwords do not match')
    alert('Registered successfully — please login')
    setIsRegistering(false)
    setUserForm({ email: '', password: '', confirmPassword: '', username: '', robloxUsername: '' })
  }

  const handleAdminSubmit = (e) => {
    e.preventDefault()
    if (adminForm.email === 'admin@mohoshop.com' && adminForm.password === 'admin123') {
      onAdminLogin && onAdminLogin()
    } else {
      alert('Invalid admin credentials')
    }
  }

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark-100 font-display mb-2">Moho Shop</h1>
          <p className="text-dark-300">Welcome to the ultimate Roblox marketplace</p>
        </div>

        <div className="flex bg-dark-800 rounded-lg p-1">
          <button onClick={() => { setIsUserAuth(true); setIsRegistering(false) }} className={`flex-1 py-2 px-4 rounded-md font-medium ${isUserAuth ? 'bg-dark-700 text-dark-100 shadow-lg' : 'text-dark-300 hover:text-dark-100'}`}>
            Customer
          </button>
          <button onClick={() => setIsUserAuth(false)} className={`flex-1 py-2 px-4 rounded-md font-medium ${!isUserAuth ? 'bg-dark-700 text-dark-100 shadow-lg' : 'text-dark-300 hover:text-dark-100'}`}>
            Admin
          </button>
        </div>

        {isUserAuth ? (
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-dark-100 mb-6 text-center font-display">{isRegistering ? 'Customer Register' : 'Customer Login'}</h2>

            {isRegistering ? (
              <form onSubmit={handleRegister} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">Email</label>
                  <input type="email" value={userForm.email} onChange={(e) => setUserForm({ ...userForm, email: e.target.value })} className="input-field w-full" placeholder="Enter your email" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">Password</label>
                  <input type="password" value={userForm.password} onChange={(e) => setUserForm({ ...userForm, password: e.target.value })} className="input-field w-full" placeholder="Enter a password" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">Confirm Password</label>
                  <input type="password" value={userForm.confirmPassword} onChange={(e) => setUserForm({ ...userForm, confirmPassword: e.target.value })} className="input-field w-full" placeholder="Confirm your password" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">Username</label>
                  <input type="text" value={userForm.username} onChange={(e) => setUserForm({ ...userForm, username: e.target.value })} className="input-field w-full" placeholder="Choose a username" />
                </div>

                <button type="submit" className="btn-primary w-full">Register</button>
                <div className="mt-4 text-center">
                  <button type="button" onClick={() => setIsRegistering(false)} className="text-sm text-dark-300 hover:text-dark-100">Already have an account? Login</button>
                </div>
              </form>
            ) : (
              <>
                <form onSubmit={handleUserSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">Email</label>
                    <input type="email" value={userForm.email} onChange={(e) => setUserForm({ ...userForm, email: e.target.value })} className="input-field w-full" placeholder="Enter your email" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">Password</label>
                    <input type="password" value={userForm.password} onChange={(e) => setUserForm({ ...userForm, password: e.target.value })} className="input-field w-full" placeholder="Enter your password" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">Username</label>
                    <input type="text" value={userForm.username} onChange={(e) => setUserForm({ ...userForm, username: e.target.value })} className="input-field w-full" placeholder="Enter your username" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">Roblox Username</label>
                    <input type="text" value={userForm.robloxUsername} onChange={(e) => setUserForm({ ...userForm, robloxUsername: e.target.value })} className="input-field w-full" placeholder="Enter your Roblox username" />
                  </div>

                  <button type="submit" className="btn-primary w-full">Login as Customer</button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-dark-300 text-sm">Don't have an account? <button onClick={() => setIsRegistering(true)} className="text-dark-100 font-medium hover:underline">Register here</button></p>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-dark-100 mb-6 text-center font-display">Admin Login</h2>

            <form onSubmit={handleAdminSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-dark-300 mb-2">Admin Email</label>
                <input type="email" value={adminForm.email} onChange={(e) => setAdminForm({ ...adminForm, email: e.target.value })} className="input-field w-full" placeholder="admin@mohoshop.com" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-300 mb-2">Password</label>
                <input type="password" value={adminForm.password} onChange={(e) => setAdminForm({ ...adminForm, password: e.target.value })} className="input-field w-full" placeholder="Enter admin password" required />
              </div>

              <button type="submit" className="btn-secondary w-full">Access Admin Panel</button>
            </form>

            <div className="mt-6 bg-dark-700 p-4 rounded-lg">
              <p className="text-dark-300 text-sm text-center"><strong>Demo Credentials:</strong><br />Email: admin@mohoshop.com<br />Password: admin123</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
