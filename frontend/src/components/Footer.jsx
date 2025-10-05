function Footer() {
  return (
    <footer className="bg-dark-900 text-dark-100 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-slide-up">
            <h3 className="text-lg font-semibold mb-4 font-display">Contact</h3>
            <p className="text-dark-300">Get in touch with us for any questions or support.</p>
          </div>
          <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
            <h3 className="text-lg font-semibold mb-4 font-display">Terms of Service</h3>
            <p className="text-dark-300">Read our terms and conditions for using our service.</p>
          </div>
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-lg font-semibold mb-4 font-display">Privacy Policy</h3>
            <p className="text-dark-300">Learn how we protect your privacy and data.</p>
          </div>
          <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
            <h3 className="text-lg font-semibold mb-4 font-display">Support</h3>
            <p className="text-dark-300">Need help? Contact our support team.</p>
          </div>
        </div>
        <div className="border-t border-dark-700 mt-8 pt-8 text-center">
          <p className="text-dark-300">© 2025 Moha's Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
