import {
  Avatar,
  Button,
  DatePicker,
  Dropdown,
  Form,
  Input,
  InputNumber,
  MenuProps,
  message,
  Select,
  Space,
  Tooltip,
  Typography,
} from "antd";
import React, { useState } from "react";
import {
  CloseCircleOutlined,
  StopOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  QuestionCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import "../../styles/createProjectDrawer.css";

const { Text } = Typography;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Input placeholder="Search by name" />,
  },
  {
    key: "2",
    label: (
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
          <Text>
            <small>raveeshadilanka1999@gmail</small>
          </Text>
        </div>
      </div>
    ),
  },
];

const CreateProjectDrawer: React.FC = () => {
  const [form] = Form.useForm();
  const [selectedColor, setSelectedColor] = useState<string>("color1");
  const [selectedStatus, setSelectedStatus] = useState<string>("proposed");
  const [intputFieldVisibile, setinputFieldVisible] = useState<boolean>(false);

  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const handleChange = (value: string) => {
    setSelectedStatus(value);
  };

  const handleClick = () => {
    setinputFieldVisible(!intputFieldVisibile);
  };

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true }, { type: "string" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          layout="horizontal"
          name="projectColor"
          label="Project Color"
          rules={[{ required: true }, { type: "string" }]}
        >
          <Select
            suffixIcon={null}
            defaultValue={selectedColor}
            variant="borderless"
            style={{ width: 60 }}
            options={[
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
                      backgroundColor: "#00ff00",
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
                      backgroundColor: "#00ff00",
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
                      backgroundColor: "#00ff00",
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
                      backgroundColor: "#00ff00",
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
                      backgroundColor: "#00ff00",
                    }}
                  />
                ),
              },
            ]}
          />
        </Form.Item>
        <Form.Item name="status" label="Status" rules={[{}]}>
          <Select
            defaultValue={selectedStatus}
            style={{ width: "100%" }}
            onChange={handleChange}
            options={[
              {
                value: "cancelled",
                label: (
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    {selectedStatus !== "cancelled" && (
                      <CloseCircleOutlined style={{ color: "red" }} />
                    )}
                    <Text>Cancelled</Text>
                  </div>
                ),
              },
              {
                value: "blocked",
                label: (
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    {selectedStatus !== "blocked" && (
                      <StopOutlined style={{ color: "#cbc8a1" }} />
                    )}
                    <Text>Blocked</Text>
                  </div>
                ),
              },
              {
                value: "onHold",
                label: (
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    {selectedStatus !== "onHold" && (
                      <StopOutlined style={{ color: "#cbc8a1" }} />
                    )}
                    <Text>On Hold</Text>
                  </div>
                ),
              },
              {
                value: "proposed",
                label: (
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    {selectedStatus !== "proposed" && (
                      <ClockCircleOutlined style={{ color: "#cbc8a1" }} />
                    )}
                    <Text>Proposed</Text>
                  </div>
                ),
              },
              {
                value: "inPlanning",
                label: (
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    {selectedStatus !== "inPlanning" && (
                      <ClockCircleOutlined style={{ color: "#cbc8a1" }} />
                    )}
                    <Text>In Planning</Text>
                  </div>
                ),
              },
              {
                value: "inProgress",
                label: (
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    {selectedStatus !== "inProgress" && (
                      <ClockCircleOutlined style={{ color: "#80ca79" }} />
                    )}
                    <Text>In Progress</Text>
                  </div>
                ),
              },
              {
                value: "completed",
                label: (
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    {selectedStatus !== "completed" && (
                      <CheckCircleOutlined style={{ color: "#80ca79" }} />
                    )}
                    <Text>Completed</Text>
                  </div>
                ),
              },
              {
                value: "continuous",
                label: (
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    {selectedStatus !== "continuous" && (
                      <ClockCircleOutlined style={{ color: "#80ca79" }} />
                    )}
                    <Text>Continuous</Text>
                  </div>
                ),
              },
            ]}
          />
        </Form.Item>
        <Form.Item name="health" label="Health" rules={[{}]}>
          <Select
            defaultValue="notSet"
            style={{ width: "100%" }}
            options={[
              { value: "notSet", label: "Not Set" },
              { value: "needsAttention", label: "Needs Attention" },
              { value: "AtRisk", label: "At Risk" },
              { value: "good", label: "Good" },
            ]}
          />
        </Form.Item>
        <Form.Item name="category" label="Category" rules={[{}]}>
          {intputFieldVisibile ? (
            <Select
              showSearch
              placeholder="Enter a name for the category"
              defaultActiveFirstOption={false}
              suffixIcon={null}
              filterOption={false}
              notFoundContent={null}
            />
          ) : (
            <Select
              placeholder="Add a category to the project"
              style={{ width: "100%" }}
              options={[
                {
                  label: (
                    <Button
                      style={{ width: "100%" }}
                      type="dashed"
                      onClick={handleClick}
                    >
                      New Category
                    </Button>
                  ),
                },
              ]}
            />
          )}
        </Form.Item>
        <Form.Item name="notes" label="Notes">
          <TextArea></TextArea>
        </Form.Item>
        <Form.Item
          name="notes"
          label={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Text>Client</Text>
              <Tooltip title="You can manage clients under settings.">
                <QuestionCircleOutlined style={{ color: "#00000073" }} />
              </Tooltip>
            </div>
          }
        >
          <Input placeholder="Select client" />
        </Form.Item>
        <Form.Item
          layout="horizontal"
          name="projectManager"
          label="Project Manager"
          rules={[{ required: true }, { type: "string" }]}
        >
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <Button className="custom-button">
              <Button type="dashed" shape="circle" size="small">
                <PlusOutlined />
              </Button>
            </Button>
          </Dropdown>
        </Form.Item>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item label="Start date">
            <DatePicker />
          </Form.Item>
          <Form.Item label="End date">
            <DatePicker />
          </Form.Item>
        </div>
        <Form.Item label="Estimated working days">
        <InputNumber min={0} defaultValue={0} style={{ width: '100%' }}/>
          </Form.Item>
        <Form.Item label="Estimated man days">
        <InputNumber min={0} defaultValue={0} style={{ width: '100%' }}/>
          </Form.Item>
        <Form.Item label="Hours per day">
        <InputNumber min={0} defaultValue={8} style={{ width: '100%' }}/>
          </Form.Item>
        <Form.Item>
          <Space style={{ width: "100%" }}>
            <Button type="primary" htmlType="submit" style={{ width: "330px" }}>
              Create
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProjectDrawer;
