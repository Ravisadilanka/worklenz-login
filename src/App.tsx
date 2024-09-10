import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reset_Password from "./pages/Reset_Password";
import { ConfigProvider, Button } from "antd";
import { theme } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import "./i18n"; // Import the i18n configuration

const { darkAlgorithm, defaultAlgorithm } = theme;

const App: React.FC = () => {
  
  // Initialize theme state with value from localStorage or default to light mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { i18n } = useTranslation(); // Access the i18n instance to change languages

  // Update localStorage and document body background color when theme changes
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
    document.body.style.backgroundColor = isDarkMode ? "#1c1c1c" : "#FAFAFA";
  }, [isDarkMode]);

  // Toggle theme between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Toggle language between English and French
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorBgBase: isDarkMode ? "#141414" : "#FAFAFA",
        },
      }}
    >
      <BrowserRouter>
        <div style={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}>
          <Button onClick={toggleTheme} style={{ marginRight: "10px" }}>
            {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
          </Button>
          <Button onClick={toggleLanguage}>
            {i18n.language === "en" ? "FR" : "EN"}
          </Button>
        </div>
        <Routes>
          <Route path="/" element={<Login isDarkMode={isDarkMode} />} />
          <Route path="/signup" element={<Signup isDarkMode={isDarkMode} />} />
          <Route
            path="/reset-password"
            element={<Reset_Password isDarkMode={isDarkMode} />}
          />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
