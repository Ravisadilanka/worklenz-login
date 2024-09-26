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
  Row,
  Col,
  Drawer,
  MenuProps,
  Avatar,
  Card,
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
  MenuOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import "../styles/layout.css";

import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import SideDrawer from "../components/SideDrawer";
import InviteDrawer from "../components/InviteDrawer";
import NotificationDrawer from "../components/NotificationDrawer";

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

  const [sideDraweropen, setSideDraweropen] = useState(false);

  const showSideDrawer = () => {
    setSideDraweropen(true);
  };

  const onCloseSideDrawer = () => {
    setSideDraweropen(false);
  };

  const [inviteDraweropen, setInviteDraweropen] = useState(false);

  const showInviteDrawer = () => {
    setInviteDraweropen(true);
  };

  const onCloseInviteDrawer = () => {
    setInviteDraweropen(false);
  };
  const [notificationDraweropen, setNotificationDraweropen] = useState(false);

  const showNotificationDrawer = () => {
    setNotificationDraweropen(true);
  };

  const onCloseNotificationDrawer = () => {
    setNotificationDraweropen(false);
  };

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const names: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Avatar
                style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
                size="large"
              >
                R
              </Avatar>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text type="secondary">
                <small>Owned by Raveesha Dilanka</small>
              </Text>
              <Text>Raveesha Dilanka</Text>
            </div>
          </div>
          <div>
            <Text type="success" style={{ fontSize: "17px" }}>
              <CheckCircleFilled />
            </Text>
          </div>
        </a>
      ),
    },
  ];
  const profile: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Card className="custom-card" title={
          <div style={{paddingTop: '16px'}}>
            <Text>Account</Text>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div>
              <Avatar
                style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
                size={30}
              >
                R
              </Avatar>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text>Raveesha Dilanka</Text>
              <Text >
                <small>raveeshadilanka1999@gmail</small>
              </Text>
              <Text type="secondary">
                <small>(Owner)</small>
              </Text>
            </div>
          </div>
          </div>
        } 
        bordered={false} style={{ width: 230 }}>
          <p>Admin Center</p>
          <p>Setting</p>
          <p>Log Out</p>
        </Card>
      ),
    },
  ];

  return (
    <Layout style={{ padding: "0", margin: "0" }}>
      <Col>
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
                fontWeight: 600,
                minWidth: "480px",
                backgroundColor: `${isDarkMode ? "black" : "white"}`,
                width: "auto",
              }}
            />
          </div>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={24}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              position: "absolute",
              right: "40px",
            }}
          >
            <div
              className="right-container"
              style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
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
                  onClick={showInviteDrawer}
                >
                  {t("invite")}
                </Button>
                <Drawer title="Add Member" onClose={onCloseInviteDrawer} open={inviteDraweropen}>
                  <InviteDrawer />
                </Drawer>
              </Tooltip>
              <Tooltip title={t("switchTeam")}>
                <Dropdown
                  menu={{ items: names }}
                  placement="bottomRight"
                  trigger={["click"]}
                  overlayStyle={{ marginTop: "5px", padding: 0 }}
                >
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
                    <strong style={{ marginRight: "8px" }}>
                      Raveesha Dilanka
                    </strong>
                    <DownOutlined style={{ fontWeight: "900" }} />
                  </Button>
                </Dropdown>
              </Tooltip>
              <Badge count={3} offset={[-8, 5]}>
                <Tooltip title={t("notifications")}>
                  <Button
                    type="text"
                    icon={<BellOutlined />}
                    onClick={showNotificationDrawer}
                  />
                  <Drawer
                    title="Unread Notifications"
                    onClose={onCloseNotificationDrawer}
                    open={notificationDraweropen}
                  >
                    <NotificationDrawer />
                  </Drawer>
                </Tooltip>
              </Badge>
              <Tooltip title={t("help")}>
                <Button type="text" icon={<QuestionCircleOutlined />} />
              </Tooltip>
              <Tooltip title={t("profile")}>
                <Dropdown
                overlayClassName="custom-dropdown"
                  menu={{ items: profile }}
                  placement="bottomRight"
                  trigger={["click"]}
                  overlayStyle={{ marginTop: "5px", padding: 0 }}
                >
                  <Button type="text" icon={<UserOutlined />} />
                </Dropdown>
              </Tooltip>
              {/* <ThemeButton />
          <LanguageButton /> */}
            </div>
            <div className="sidedrawer">
              <Button onClick={showSideDrawer}>
                <MenuOutlined />
              </Button>
              <Drawer title="Menu" onClose={onCloseSideDrawer} open={sideDraweropen}>
                <SideDrawer />
              </Drawer>
            </div>
          </Col>
        </Header>
      </Col>

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
