import { Empty, Segmented, Table } from "antd";
import React from "react";

const NotificationDrawer: React.FC = () => {
  return (
    <div>
      <Segmented<string>
        options={["Unread", "Read"]}
      />
      <Empty description="You've read all your notifications"></Empty>
    </div>
  );
};

export default NotificationDrawer;
