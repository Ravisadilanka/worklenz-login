import React, { useState } from "react";
import {
  Breadcrumb,
  Button,
  Flex,
  FloatButton,
  Layout,
  Menu,
  theme,
  Typography,
  Badge,
  Dropdown,
  Space,
  Select,
} from "antd";
import logo from "../assets/worklenz.png";
import ThemeButton from "../components/ThemeButton";
import LanguageButton from "../components/LanguageButton";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  BankOutlined,
  DownOutlined,
  UsergroupAddOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const { Header, Content, Footer } = Layout;

const { Text } = Typography;

const items = [
  { key: "1", label: "home" },
  { key: "2", label: "projects" },
  { key: "3", label: "shedule" },
  { key: "4", label: "reporting" },
];

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const [hovered, setHovered] = useState(false);

  const { t } = useTranslation("layout");

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const menuProps = {
    items,
  };

  return (
    <Layout style={{ padding: "0", margin: "0" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          backgroundColor: `${isDarkMode ? "black" : "white"}`,
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <img src={logo} alt="" style={{ width: "135px" }} />

          <Menu
            theme={isDarkMode ? "dark" : "light"}
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items.map((item) => ({
              ...item,
              label: t(item.label),
            }))}
            style={{
              minWidth: "480px",
              backgroundColor: `${isDarkMode ? "black" : "white"}`,
              width: "auto",
            }}
          />
        </div>

        <div style={{ flex: 1 }}></div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Tooltip title={t("addTeamMember")}>
            <Button
              type="dashed"
              icon={<UsergroupAddOutlined />}
              style={{
                borderColor: "#1677FF",
                color: "#1677FF",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {t("invite")}
            </Button>
          </Tooltip>
          <Tooltip title={t("switchTeam")}>
            <Dropdown trigger={["click"]}>
              <Button
                style={{
                  backgroundColor: `${hovered ? "#ccefff" : "#e6f7ff"}`,
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  color: "#1890ff",
                  height: "40px",
                  border: "none",
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                icon={<BankOutlined />}
              >
                <strong style={{ marginRight: "8px" }}>Raveesha Dilanka</strong>
                <DownOutlined style={{ fontWeight: "900" }} />
              </Button>
            </Dropdown>
          </Tooltip>
          <Badge count={3} offset={[-8, 5]}>
            <Tooltip title={t("notifications")}>
              <Button type="text" icon={<BellOutlined />} />
            </Tooltip>
          </Badge>
          <Tooltip title={t("help")}>
            <Button type="text" icon={<QuestionCircleOutlined />} />
          </Tooltip>
          <Tooltip title={t("profile")}>
            <Button type="text" icon={<UserOutlined />} />
          </Tooltip>
          <ThemeButton />
          <LanguageButton />
        </div>
      </Header>

      <Content>
        <div
          style={{
            padding: 24,
            minHeight: "100vh",
            backgroundColor: `${isDarkMode ? "black" : "white"}`,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default PageLayout;
