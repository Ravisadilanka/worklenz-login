import { Button } from "antd";
import React from "react";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { toggleDarkMode } from "../redux/features/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

const ThemeButton = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Button
      onClick={() => dispatch(toggleDarkMode())}
      style={{ marginRight: "10px" }}
    >
      {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
    </Button>
  );
};

export default ThemeButton;
