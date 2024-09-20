import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reset_Password from "./pages/Reset_Password";
import { ConfigProvider } from "antd";
import { theme } from "antd";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import "./i18n"; // Import the i18n configuration
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import ThemeButton from "./components/ThemeButton";
import LanguageButton from "./components/LanguageButton";
import Home from "./pages/Home";


const { darkAlgorithm, defaultAlgorithm } = theme;

const App: React.FC = () => {
  
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
    document.body.style.backgroundColor = isDarkMode ? "#1c1c1c" : "#FAFAFA";
  }, [isDarkMode]);



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
        
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/reset-password" element={<Reset_Password/>}/>
            <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
