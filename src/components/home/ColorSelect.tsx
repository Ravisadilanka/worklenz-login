// ColorSelect.tsx
import React from "react";
import { Select } from "antd";

interface ColorSelectProps {
  selectedColor: string;
  onChange: (value: string) => void;
}

const ColorSelect: React.FC<ColorSelectProps> = ({ selectedColor, onChange }) => {
  const colorOptions = [
    {
      value: "color1",
      label: (
        <div
          style={{
            height: "16px",
            width: "16px",
            borderRadius: "50%",
            backgroundColor: "#154c9b",
          }}
        />
      ),
    },
    {
      value: "color2",
      label: (
        <div
          style={{
            height: "16px",
            width: "16px",
            borderRadius: "50%",
            backgroundColor: "#00ff00",
          }}
        />
      ),
    },
    {
      value: "color3",
      label: (
        <div
          style={{
            height: "16px",
            width: "16px",
            borderRadius: "50%",
            backgroundColor: "#ff0000",
          }}
        />
      ),
    },
    {
      value: "color4",
      label: (
        <div
          style={{
            height: "16px",
            width: "16px",
            borderRadius: "50%",
            backgroundColor: "#0000ff",
          }}
        />
      ),
    },
    {
      value: "color5",
      label: (
        <div
          style={{
            height: "16px",
            width: "16px",
            borderRadius: "50%",
            backgroundColor: "#ffff00",
          }}
        />
      ),
    },
    {
      value: "color6",
      label: (
        <div
          style={{
            height: "16px",
            width: "16px",
            borderRadius: "50%",
            backgroundColor: "#ff00ff",
          }}
        />
      ),
    },
    {
      value: "color7",
      label: (
        <div
          style={{
            height: "16px",
            width: "16px",
            borderRadius: "50%",
            backgroundColor: "#00ffff",
          }}
        />
      ),
    },
  ];

  return (
    <Select
      suffixIcon={null}
      value={selectedColor}
      style={{ width: 60 }}
      onChange={onChange}
      options={colorOptions}
    />
  );
};

export default ColorSelect;
