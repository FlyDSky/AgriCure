import { useState } from "react";

export default function MarketPrices() {
  const [crop, setCrop] = useState("Wheat");

  // Placeholder for chart data
  const priceData = {
    Wheat: [200, 210, 220, 215, 230, 225],
    Rice: [180, 185, 190, 195, 200, 198],
    Maize: [150, 155, 160, 158, 162, 165],
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-8">
        📊 Market Price Trends
      </h1>

      {/* Crop Selector */}
      <div className="max-w-2xl mx-auto mb-6 flex flex-col md:flex-row items-center gap-4">
        <label className="text-gray-700 font-medium">Select a crop:</label>
        <select
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option>Wheat</option>
          <option>Rice</option>
          <option>Maize</option>
        </select>
      </div>

      {/* Chart Placeholder */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {crop} Price Trend (Last 6 Months)
        </h2>
        <div className="flex justify-between text-gray-600 text-sm mb-2">
          {months.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
        <div className="relative h-48 bg-green-50 rounded-xl flex items-end gap-2 p-2">
          {priceData[crop].map((price, idx) => (
            <div
              key={idx}
              className="bg-green-400 rounded-xl transition-all"
              style={{ height: `${(price / Math.max(...priceData[crop])) * 100}%`, width: "20%" }}
              title={`$${price}`}
            />
          ))}
        </div>
        <p className="mt-2 text-gray-500 text-sm">*Prices are approximate and in USD per unit.</p>
      </div>

      {/* Additional Info */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Market Insights</h2>
        <p className="text-gray-700">
          The {crop} prices have shown gradual growth over the past 6 months. Keep track of seasonal trends to plan your harvest and sales effectively.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Monitor monthly market prices to sell at the best rate.</li>
          <li>Consider storage if prices are expected to rise.</li>
          <li>Compare with neighboring markets for better decisions.</li>
        </ul>
      </div>
    </div>
  );
}
