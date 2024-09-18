import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { toggleLanguage } from "../redux/features/languageSlice";

const LanguageButton = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Button onClick={() => dispatch(toggleLanguage())}>
      {language === "en" ? "FR" : "EN"}
    </Button>
  );
};

export default LanguageButton;
