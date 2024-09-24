import {
  Button,
  Card,
  Col,
  Input,
  Row,
  Segmented,
  Select,
  Table,
  TableColumnsType,
  Tabs,
} from "antd";
import React from "react";
import { SyncOutlined } from "@ant-design/icons";
import "../styles/TableStyles.css";
import { Option } from "antd/es/mentions";
import { useSelector } from "react-redux";
import { stat } from "fs";
import { RootState } from "../redux/store";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

interface DataType {
  key: string;
  task: string;
  project: string;
  status: string;
  dueDate: Date;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Task",
    dataIndex: "task",
  },
  {
    title: "Project",
    dataIndex: "project",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status: string, record: DataType) => (
      <Select
        className="custom-select"
        defaultValue={{ value: "To do", label: "To do" }}
        labelInValue
      >
        <Option value="To do">
          <div
            style={{
              fontSize: "13px",
              display: "flex",
              gap: "2px",
              justifyContent: 'center',
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#A9A9A9",
                display: "inline-block",
              }}
            ></span>
            To do
          </div>
        </Option>
        <Option value="Doing">
          <div
            style={{
              fontSize: "13px",
              display: "flex",
              gap: "4px",
              justifyContent: 'center',
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#70a6f3", // Different color for different statuses
                display: "inline-block",
              }}
            ></span>
            Doing
          </div>
        </Option>
        <Option value="Done">
          <div
            style={{
              fontSize: "13px",
              display: "flex",
              gap: "4px",
              justifyContent: 'center',
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#70a6f3", // Color for "Done" status
                display: "inline-block",
              }}
            ></span>
            Done
          </div>
        </Option>
      </Select>
    ),
  },
  
  {
    title: "Due Date",
    dataIndex: "dueDate",
    render: (dueDate: Date) => {
      return new Date(dueDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    },
  },
];

const data = [
  {
    key: "1",
    task: "Task 01",
    project: "Project 01",
    status: "Status",
    dueDate: new Date("2024-07-15"),
  },
  {
    key: "2",
    task: "Task 01",
    project: "Project 01",
    status: "Status",
    dueDate: new Date("2024-09-15"),
  },
];

const TaskTable: React.FC = () => {

    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const items = [
    { key: "1", label: "All" },
    { key: "2", label: "Today" },
    { key: "3", label: "Upcoming" },
    { key: "4", label: "Overdue" },
    { key: "5", label: "No due date" },
  ];
  return (
    <div>
      <Row gutter={16}>
        <Col span={16}>
          <Card
           className={isDarkMode ? 'custom-card' : ''}
            title={
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <p>Tasks</p>
                <Select
                  defaultValue="assigned to me"
                  style={{ width: "142px", backgroundColor: `${isDarkMode ? 'black' : 'white'}` }}
                  onChange={handleChange}
                  options={[
                    { value: "assigned to me", label: "assigned to me" },
                    { value: "assigned by me", label: "assigned by me" },
                  ]}
                />
              </div>
            }
            bordered={false}
            style={{
              backgroundColor: `${isDarkMode ? 'black' : 'white'}`,
              boxShadow: "#7a7a7a26 0 5px 16px",
            }}
            extra={
              <div style={{ display: "flex", gap: "10px" }}>
                <Button
                  style={{
                    width: "32px",
                    borderRadius: "50%",
                    backgroundColor: `${isDarkMode ? 'black' : 'white'}`,
                  }}
                >
                  <SyncOutlined />
                </Button>
                <Segmented<string>
                  options={["List", "Calendar"]}
                  onChange={(value) => {
                    console.log(value);
                  }}
                />
              </div>
            }
          >
            <Tabs
              defaultActiveKey="1"
              type="card"
              items={items.map((item) => ({
                ...item,
              }))}
            />
            <Input placeholder="+ Add Task" style={{ width: "250px", marginBottom: '15px'}} />
            <Table<DataType>
              columns={columns}
              dataSource={data}
              pagination={false}
              rowClassName={() => (isDarkMode ? 'dark-row' : 'light-row')}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TaskTable;
