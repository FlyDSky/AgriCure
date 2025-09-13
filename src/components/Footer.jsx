import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <div className="bg-white text-green-700 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-3">
            🌾
          </div>
          <p className="text-gray-200 text-center md:text-left">
            Farmer Cure helps you with crop insights, weather forecasts, and market trends for smarter farming.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="/disease" className="hover:text-green-300 transition">Crop Disease Detection</a></li>
            <li><a href="/advice" className="hover:text-green-300 transition">Farming Advice</a></li>
            <li><a href="/market-prices" className="hover:text-green-300 transition">Market Prices</a></li>
            <li><a href="/weather" className="hover:text-green-300 transition">Weather Forecast</a></li>
            <li><a href="/chatbot" className="hover:text-green-300 transition">Chatbot</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4 text-white">
            <a href="#" className="hover:text-green-300"><Facebook size={20} /></a>
            <a href="#" className="hover:text-green-300"><Twitter size={20} /></a>
            <a href="#" className="hover:text-green-300"><Instagram size={20} /></a>
            <a href="#" className="hover:text-green-300"><Linkedin size={20} /></a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-green-700 mt-6 pt-4 text-gray-300 text-sm text-center">
        © 2025 Farmer Cure App. All rights reserved.
      </div>
    </footer>
  );
}
