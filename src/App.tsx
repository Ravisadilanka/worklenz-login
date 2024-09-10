import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reset_Password from "./pages/Reset_Password";
import { ConfigProvider, Button } from "antd";
import { theme } from "antd";
import{ MoonOutlined, SunOutlined} from '@ant-design/icons';

const { darkAlgorithm, defaultAlgorithm } = theme;

const App: React.FC = () => {
  // Initialize theme state with value from localStorage or default to light mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  // Update localStorage and document body background color when theme changes
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
    document.body.style.backgroundColor = isDarkMode ? "#1c1c1c" : "#FAFAFA";
  }, [isDarkMode]);

  // Toggle theme between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: "#1890ff",
          colorBgBase: isDarkMode ? "#141414" : "#FAFAFA",
          colorTextBase: isDarkMode ? "#ffffff" : "#000000",
        },
      }}
    >
      <BrowserRouter>
        <Button
          onClick={toggleTheme}
          style={{
            position: 'fixed',
            top: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
        </Button>
        <Routes>
          <Route path="/" element={<Login isDarkMode={isDarkMode}/>} />
          <Route path="/signup" element={<Signup isDarkMode={isDarkMode}/>} />
          <Route path="/reset-password" element={<Reset_Password isDarkMode={isDarkMode}/>} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
