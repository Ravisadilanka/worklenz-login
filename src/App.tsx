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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { toggleDarkMode } from "./redux/features/themeSlice";

const { darkAlgorithm, defaultAlgorithm } = theme;

const App: React.FC = () => {
  
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)
  const dispatch = useDispatch<AppDispatch>()
  const { i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
    document.body.style.backgroundColor = isDarkMode ? "#1c1c1c" : "#FAFAFA";
  }, [isDarkMode]);

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
          <Button onClick={() => dispatch(toggleDarkMode())} style={{ marginRight: "10px" }}>
            {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
          </Button>
          <Button onClick={toggleLanguage}>
            {i18n.language === "en" ? "FR" : "EN"}
          </Button>
        </div>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route
            path="/reset-password"
            element={<Reset_Password/>}
          />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
