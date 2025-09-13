import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
                          url('https://images.unsplash.com/photo-1571047399553-d76f7bff11f3?auto=format&fit=crop&w=1950&q=80')`,
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Main Content */}
      <main className="p-8 max-w-7xl mx-auto text-gray-900">

        {/* Hero Section */}
        <section className="text-center my-12">
          <h1 className="text-4xl font-extrabold mb-4">🌿 Agricure - Smart Farming Simplified</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering farmers with cutting-edge AI tools for smarter, efficient, and more sustainable agriculture.
          </p>
        </section>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 my-12">
          <Link to="/disease" className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition transform hover:scale-105">
            <i className="bi bi-eyeglasses text-3xl text-green-500 mb-3"></i>
            <h3 className="text-xl font-semibold mb-2">📸 Crop Disease Detection</h3>
            <p className="text-gray-600">Detect crop diseases early by analyzing images and receive instant diagnosis and treatment advice.</p>
          </Link>

          <Link to="/advice" className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition transform hover:scale-105">
            <i className="bi bi-journal-text text-3xl text-green-500 mb-3"></i>
            <h3 className="text-xl font-semibold mb-2">📝 Personalized Farming Advice</h3>
            <p className="text-gray-600">Get AI-powered recommendations tailored to your farm's conditions, crop type, and location.</p>
          </Link>

          <Link to="/market-prices" className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition transform hover:scale-105">
            <i className="bi bi-graph-up text-3xl text-green-500 mb-3"></i>
            <h3 className="text-xl font-semibold mb-2">📊 Market Price Trends</h3>
            <p className="text-gray-600">Stay updated with real-time market prices for your crops to maximize your profits and plan sales.</p>
          </Link>

          <Link to="/weather" className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition transform hover:scale-105">
            <i className="bi bi-cloud-sun text-3xl text-green-500 mb-3"></i>
            <h3 className="text-xl font-semibold mb-2">☀️ Weather Forecast</h3>
            <p className="text-gray-600">Receive accurate local weather forecasts with alerts to plan your farming activities efficiently.</p>
          </Link>

          <Link to="/chatbot" className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition transform hover:scale-105">
            <i className="bi bi-chat-dots text-3xl text-green-500 mb-3"></i>
            <h3 className="text-xl font-semibold mb-2">💬 Chat with Agricure Bot</h3>
            <p className="text-gray-600">Instant help for any farming question through our advanced smart chatbot, available 24/7.</p>
          </Link>

          <Link to="/community" className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition transform hover:scale-105">
            <i className="bi bi-people text-3xl text-green-500 mb-3"></i>
            <h3 className="text-xl font-semibold mb-2">👥 Farmer Community</h3>
            <p className="text-gray-600">Join a community of farmers, share experiences, and get support from fellow growers.</p>
          </Link>
        </section>

        {/* About Agricure */}
        <section className="my-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Agricure?</h2>
          <p className="text-gray-600 mb-6">
            Agricure combines the power of AI, real-time data, and user-friendly interfaces to support farmers in making smart, data-driven decisions. Whether it's identifying diseases, tracking market prices, or planning farming activities based on weather predictions, Agricure is your all-in-one farming assistant.
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Learn More
          </Link>
        </section>

      </main>
    </div>
  );
}

export default Home;
