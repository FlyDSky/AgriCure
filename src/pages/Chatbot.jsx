import React, { useState, useRef, useEffect } from "react";
import { Send, User, Bot } from "lucide-react";

// Error Boundary to catch runtime errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center mt-10 text-red-500">
          Something went wrong in the Chatbot.
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Chatbot() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const messageEndRef = useRef(null);

  const handleSubmit = async () => {
    if (!query.trim() && !image) return;

    const userMessage = { role: "user", text: query, image };
    setMessages((prev) => [...prev, userMessage]);
    setQuery("");
    setImage(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("query", query);
      if (image) formData.append("image", image);

      const res = await fetch(import.meta.env.VITE_API_URL + "/chat", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      const botMessage = { role: "bot", text: data.text || "No response" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Error: " + err.message },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ErrorBoundary>
      <div className="flex flex-col items-center bg-gray-50 min-h-screen pt-24 px-4">
        {/* Title */}
        <h1 className="text-4xl font-semibold text-green-600 mb-6 text-center">
          💬 Smart Farming Assistant
        </h1>

        {/* Info Section */}
        <div className="max-w-3xl bg-white shadow rounded-xl p-6 text-gray-700 text-center mb-6">
          <p className="text-lg">
            Welcome to Agricure Chatbot! Ask farming questions or upload crop images to receive expert AI guidance instantly.
          </p>
        </div>

        {/* Chat Container */}
        <div
          className="w-full max-w-2xl bg-white rounded-3xl shadow-lg border border-gray-200 flex flex-col"
          style={{ height: "calc(100vh - 300px)" }}
        >
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4" role="log" aria-live="polite">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "bot" ? (
                  <div className="bg-green-600 text-white p-2 rounded-full">
                    <Bot size={18} />
                  </div>
                ) : (
                  <div className="bg-gray-300 text-gray-700 p-2 rounded-full">
                    <User size={18} />
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-5 py-3 rounded-2xl text-base shadow-md whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-green-100 text-green-900"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                  {msg.image && msg.image instanceof File && (
                    <img
                      src={URL.createObjectURL(msg.image)}
                      alt="Uploaded"
                      className="mt-3 max-w-full rounded-lg border"
                    />
                  )}
                </div>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 flex items-center gap-3 bg-gray-50 rounded-b-3xl">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question here..."
              aria-label="Chat input"
              className="flex-1 p-3 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 text-base"
            />

            {/* Image upload */}
            <label
              htmlFor="imageUpload"
              className="cursor-pointer p-2 text-green-600 hover:text-green-800 bg-gray-100 rounded-2xl"
            >
              <i className="bi bi-camera"></i>
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            {image && (
              <span className="text-gray-600 truncate max-w-xs">{image.name}</span>
            )}

            <button
              onClick={handleSubmit}
              disabled={(!query.trim() && !image) || loading}
              className="bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-3 rounded-2xl text-base transition flex items-center gap-2"
            >
              {loading ? "..." : <Send size={18} />}
              <span className="hidden sm:inline">Send</span>
            </button>
          </div>
        </div>

    
      </div>
    </ErrorBoundary>
  );
}
