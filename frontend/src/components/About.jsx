function About() {
  const features = [
    {
      title: "Happy Buyers",
      description: "We have a community of satisfied buyers who love our service and products.",
      icon: "😊"
    },
    {
      title: "Trusted Seller",
      description: "We ensure all sellers are verified and trustworthy, providing a safe marketplace.",
      icon: "🛡️"
    },
    {
      title: "Fast Delivery",
      description: "Get your items quickly with our fast and reliable delivery service.",
      icon: "⚡"
    },
    {
      title: "Safe Deals",
      description: "Shop with confidence knowing your transactions are secure and protected.",
      icon: "🔒"
    }
  ]

  return (
    <section className="py-16 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-dark-100 mb-4 font-display">About</h2>
          <p className="text-lg text-dark-300">Our service features</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center card p-6 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-6xl mb-4 animate-bounce-subtle">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-dark-100 mb-3 font-display">{feature.title}</h3>
              <p className="text-dark-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
