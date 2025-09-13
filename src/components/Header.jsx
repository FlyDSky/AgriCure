import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo - Left */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
            🌱
          </div>
          <h1 className="text-2xl font-bold text-green-600 hidden md:block">Agricure</h1>
        </Link>

        {/* Search Bar - Center on Desktop */}
        <div className="hidden md:flex flex-1 mx-6 justify-center">
          <div className="flex items-center w-full max-w-xl gap-2">
            <input
              type="text"
              placeholder="Search services, crops, advice..."
              className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Login - Right */}
        <div className="hidden md:flex items-center">
          <Link
            to="/login"
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition flex items-center justify-center"
          >
            <User size={20} />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 px-4 py-4 space-y-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition">
              <Search size={20} />
            </button>
          </div>

          <Link
            to="/login"
            className="flex items-center justify-center bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition"
          >
            <User size={20} />
          </Link>

          <nav className="flex flex-col gap-3 mt-2">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition">Home</Link>
            <Link to="/disease" className="text-gray-700 hover:text-green-600 transition">Crop Disease</Link>
            <Link to="/advice" className="text-gray-700 hover:text-green-600 transition">Advice</Link>
            <Link to="/market-prices" className="text-gray-700 hover:text-green-600 transition">Market Prices</Link>
            <Link to="/weather" className="text-gray-700 hover:text-green-600 transition">Weather</Link>
            <Link to="/chatbot" className="text-gray-700 hover:text-green-600 transition">Chatbot</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
