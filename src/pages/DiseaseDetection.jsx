import { useState } from "react";

export default function DiseaseDetection() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleAnalyze = () => {
    // Placeholder: Replace with API call
    if (!image) return alert("Please upload an image first!");
    setResult({
      disease: "Powdery Mildew",
      severity: "Moderate",
      recommendation: "Apply fungicide and ensure proper ventilation.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-8">
        📸 Crop Disease Detection
      </h1>

      {/* Image Upload */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border-2 border-gray-200 rounded-xl p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={handleAnalyze}
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition text-lg font-medium"
        >
          Analyze Image
        </button>
      </div>

      {/* Analysis Result */}
      {result && (
        <div className="max-w-2xl mx-auto mt-6 bg-white rounded-3xl shadow p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Analysis Result
          </h2>
          <p>
            <span className="font-semibold">Disease:</span> {result.disease}
          </p>
          <p>
            <span className="font-semibold">Severity:</span> {result.severity}
          </p>
          <p>
            <span className="font-semibold">Recommendation:</span>{" "}
            {result.recommendation}
          </p>
        </div>
      )}

      {/* Example Dataset / Common Diseases */}
      <div className="max-w-3xl mx-auto mt-8 bg-white rounded-3xl shadow p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🌾 Common Crop Diseases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-xl shadow hover:scale-105 transform transition">
            <h3 className="font-bold text-lg mb-2">Powdery Mildew</h3>
            <p className="text-sm text-gray-700">
              White powdery spots on leaves, stems, and flowers.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-xl shadow hover:scale-105 transform transition">
            <h3 className="font-bold text-lg mb-2">Leaf Rust</h3>
            <p className="text-sm text-gray-700">
              Orange-brown pustules on leaves; reduces photosynthesis.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-xl shadow hover:scale-105 transform transition">
            <h3 className="font-bold text-lg mb-2">Blight</h3>
            <p className="text-sm text-gray-700">
              Dark lesions on leaves, stems, and fruits; spreads fast.
            </p>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="max-w-3xl mx-auto mt-8 bg-white rounded-3xl shadow p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">💡 Farming Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Monitor crop leaves regularly for early signs of disease.</li>
          <li>Ensure proper spacing between plants to improve airflow.</li>
          <li>Use organic fungicides when early symptoms appear.</li>
          <li>Rotate crops to prevent disease buildup in soil.</li>
        </ul>
      </div>
    </div>
  );
}
