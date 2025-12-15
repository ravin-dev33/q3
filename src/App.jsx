import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import SAPPage from "./pages/SAPPage";
import GITEXPage from "./pages/GITEXPage";
import ITPage from "./pages/ITPage";
import MarketingPage from "./pages/MarketingPage";
import ManufacturingPage from "./pages/ManufacturingPage";
import FinancePage from "./pages/FinancePage";
import LogisticsPage from "./pages/LogisticsPage";
import SalesPage from "./pages/SalesPage";
import AchievementsPage from "./pages/AchievementsPage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sap" element={<SAPPage />} />
            <Route path="/gitex" element={<GITEXPage />} />
            <Route path="/it-infrastructure" element={<ITPage />} />
            <Route path="/marketing" element={<MarketingPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/logistics" element={<LogisticsPage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
