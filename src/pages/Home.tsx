import React, { useState } from "react";
import PageLayout from "../layout/PageLayout";
import { Col, Dropdown, MenuProps, Row, Typography } from "antd";
import { DownOutlined, EditOutlined } from "@ant-design/icons";
import TimeTitle from "../components/TimeTittle";
import GreetingTitle from "../components/GreetingTitle";
import TaskTable from "../components/TaskTable";
import TodoList from "../components/TodoList";
import ProjectsCard from "../components/ProjectsCard";
import "../styles/home.css";

const { Title } = Typography;

const Home: React.FC = () => {
  const onMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  const [isMobileView, setIsMobileView] = useState(false);

  

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
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Title
              level={3}
              style={{
                fontWeight: "500",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Hi Raveesha,&nbsp;
              <GreetingTitle />
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
        </div>
        <div style={{ position: "absolute", right: "80px", top: "8rem" }} className="create-project-button">
          <Dropdown.Button
            menu={{ items, onClick: onMenuClick }}
            icon={<DownOutlined />}
            type="primary"
          >
            <EditOutlined />
            Create Project
          </Dropdown.Button>
        </div>
        <div style={{display: 'flex'}} className="body-container">
          <div style={{ width: '66%', paddingRight: '11px'}} className="tasktable-container">
            <TaskTable />
          </div>
          <div style={{width: '34%', paddingLeft: '11px'}} className="todolist-project-container">
            <TodoList />
            <ProjectsCard />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
