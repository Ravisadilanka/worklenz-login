import { Card, Input, Typography } from "antd";
import React from "react";
import { SyncOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const { Text } = Typography;

const TodoList: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <div style={{ width: "100%", paddingBottom: "11px" }}>
      <Card
        title="To do list"
        extra={<SyncOutlined />}
        style={{ backgroundColor: `${isDarkMode ? "black" : "white"}` }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Input
            placeholder="+ Add Task"
            style={{ width: "100%", marginBottom: "15px" }}
          />
          <img
            src="https://app.worklenz.com/assets/images/empty-box.webp"
            alt="Empty Image"
            width={64}
            style={{ filter: "grayscale(1)" }}
          />
          <Text type="secondary">No tasks to show.</Text>
        </div>
      </Card>
    </div>
  );
};

export default TodoList;
