import { Badge, Button, Dropdown, Tooltip } from "antd";
import React, { useState } from "react";
import {
  BankOutlined,
  DownOutlined,
  UsergroupAddOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "../styles/layout.css";
import { useTranslation } from "react-i18next";

const SideDrawer = () => {
  const [hovered, setHovered] = useState(false);

  const { t } = useTranslation("layout");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
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
      <Button type="text" style={{ display: "flex", alignItems: "center" }}>
        <Badge count={3} offset={[-8, 5]}>
          <Tooltip title={t("notifications")}>
            <Button type="text" icon={<BellOutlined />} />
          </Tooltip>
        </Badge>
        <p>{t("notifications")}</p>
      </Button>
      <Button type="text" style={{ display: "flex", alignItems: "center" }}>
        <Tooltip title={t("help")}>
          <Button type="text" icon={<QuestionCircleOutlined />} />
        </Tooltip>
        <p>{t("help")}</p>
      </Button>
      <Button type="text" style={{ display: "flex", alignItems: "center" }}>
        <Tooltip title={t("profile")}>
          <Button type="text" icon={<UserOutlined />} />
        </Tooltip>
        <p>{t("profile")}</p>
      </Button>
    </div>
  );
};

export default SideDrawer;
