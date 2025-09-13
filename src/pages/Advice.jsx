import { useState } from "react";

export default function Advice() {
  const [selectedCrop, setSelectedCrop] = useState("Wheat");

  const adviceData = {
    Wheat: [
      { title: "Watering Tips", text: "Water your wheat crops early in the morning to avoid fungal diseases." },
      { title: "Soil Health", text: "Apply organic compost every 2 months to maintain soil fertility." },
      { title: "Pest Control", text: "Use neem oil spray weekly to prevent pest attacks." },
    ],
    Rice: [
      { title: "Water Management", text: "Maintain standing water of 2–3 inches for optimal growth." },
      { title: "Fertilizer", text: "Use nitrogen-rich fertilizer in early tillering stage." },
      { title: "Weed Control", text: "Remove weeds manually or use recommended herbicides." },
    ],
    Maize: [
      { title: "Spacing", text: "Plant maize seeds 20–25 cm apart for better growth." },
      { title: "Fertilization", text: "Apply NPK fertilizers based on soil test results." },
      { title: "Disease Prevention", text: "Monitor for leaf blight and apply fungicide if needed." },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-8">
        📝 Personalized Farming Advice
      </h1>

      {/* Crop Selector */}
      <div className="max-w-2xl mx-auto mb-6 flex flex-col md:flex-row items-center gap-4">
        <label className="text-gray-700 font-medium">Select Crop:</label>
        <select
          value={selectedCrop}
          onChange={(e) => setSelectedCrop(e.target.value)}
          className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option>Wheat</option>
          <option>Rice</option>
          <option>Maize</option>
        </select>
      </div>

      {/* Advice Cards */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {adviceData[selectedCrop].map((advice, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{advice.title}</h2>
            <p className="text-gray-700">{advice.text}</p>
          </div>
        ))}
      </div>

      {/* Seasonal Tips */}
      <div className="max-w-3xl mx-auto mt-8 bg-white rounded-3xl shadow p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🌱 Seasonal Tips</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Check soil moisture regularly before irrigation.</li>
          <li>Use mulch to retain soil moisture during hot months.</li>
          <li>Rotate crops to maintain soil fertility.</li>
          <li>Monitor local weather forecasts to prevent crop damage.</li>
        </ul>
      </div>

      {/* Reminders */}
      <div className="max-w-3xl mx-auto mt-8 bg-white rounded-3xl shadow p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">⏰ Farming Reminders</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Check for pest infestation every week.</li>
          <li>Apply fertilizers as per recommended schedule.</li>
          <li>Harvest crops at the right time to maximize yield.</li>
        </ul>
      </div>
    </div>
  );
}
