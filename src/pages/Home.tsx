import React, { useState } from "react";
import PageLayout from "../layout/PageLayout";
import { Dropdown, MenuProps, Typography } from "antd";
import { DownOutlined, EditOutlined } from "@ant-design/icons";
import TimeTitle from "../components/TimeTittle"
import GreetingTitle from "../components/GreetingTitle";

const { Title } = Typography;

const Home: React.FC = () => {
  const onMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  const items = [
    {
      key: "1",
      label: "Import from template",
    },
  ];

  return (
    <PageLayout>
      <div style={{ padding: "0 40px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              gap: "px",
            }}
          >
            <Title level={3} style={{ fontWeight: "500", display: 'flex'}}>
              Hi Raveesha,&nbsp;<GreetingTitle />
            </Title>
            <Title
              level={4}
              style={{
                color: "#1890ff",
                fontSize: "16px",
                fontWeight: "400",
                padding: 0,
                margin: 0,
              }}
            >
              <TimeTitle />
            </Title>
          </div>
          <div>
            <Dropdown.Button
              menu={{ items, onClick: onMenuClick }}
              icon={<DownOutlined />}
              type="primary"
            >
              <EditOutlined />
              Create Project
            </Dropdown.Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
