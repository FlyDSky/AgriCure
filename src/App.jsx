import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import DiseaseDetection from "./pages/DiseaseDetection";
import Advice from "./pages/Advice";
import MarketPrices from "./pages/MarketPrices";
import WeatherForecast from "./pages/WeatherForecast";
import Chatbot from "./pages/Chatbot";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disease" element={<DiseaseDetection />} />
        <Route path="/advice" element={<Advice />} />
        <Route path="/market-prices" element={<MarketPrices />} />
        <Route path="/weather" element={<WeatherForecast />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
