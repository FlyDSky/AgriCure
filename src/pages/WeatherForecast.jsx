import { useState } from "react";

export default function WeatherForecast() {
  const [forecast] = useState([
    { day: "Mon", icon: "🌤️", temp: "28°C", humidity: "60%", wind: "10 km/h" },
    { day: "Tue", icon: "🌧️", temp: "25°C", humidity: "80%", wind: "12 km/h" },
    { day: "Wed", icon: "☀️", temp: "30°C", humidity: "50%", wind: "8 km/h" },
    { day: "Thu", icon: "⛈️", temp: "24°C", humidity: "85%", wind: "15 km/h" },
    { day: "Fri", icon: "🌤️", temp: "27°C", humidity: "55%", wind: "9 km/h" },
    { day: "Sat", icon: "☀️", temp: "31°C", humidity: "45%", wind: "7 km/h" },
    { day: "Sun", icon: "🌦️", temp: "26°C", humidity: "70%", wind: "11 km/h" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-8">
        ☀️🌧️ Weather Forecast
      </h1>

      {/* Horizontal Forecast */}
      <div className="flex space-x-4 overflow-x-auto py-2 pb-4">
        {forecast.map((day, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-32 bg-white rounded-3xl shadow-lg p-4 text-center hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <p className="font-semibold text-gray-700">{day.day}</p>
            <p className="text-2xl mt-2">{day.icon}</p>
            <p className="font-bold text-green-600 mt-2">{day.temp}</p>
            <p className="text-sm text-gray-500 mt-1">Humidity: {day.humidity}</p>
            <p className="text-sm text-gray-500">Wind: {day.wind}</p>
          </div>
        ))}
      </div>

      {/* Additional Tips */}
      <div className="max-w-3xl mx-auto mt-8 bg-white rounded-3xl shadow p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🌱 Farming Tips</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Water crops early in the morning or evening to reduce evaporation.</li>
          <li>Protect plants with covers during heavy rain or storms.</li>
          <li>Monitor humidity and adjust irrigation accordingly.</li>
          <li>Plan pesticide or fertilizer application according to weather.</li>
        </ul>
      </div>
    </div>
  );
}
