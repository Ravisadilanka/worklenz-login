import { Button, Form, Input, message, Select, Space, Typography } from "antd";
import React from "react";
import "../styles/inviteDrawer.css";

const { Text } = Typography;

const InviteDrawer: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
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
          name="email"
          label="Email(s)"
          rules={[{ required: true }, { type: "email" }]}
        >
          <Input placeholder="Add team members by email" />
          <Text type="secondary" style={{ fontSize: "12px" }}>
            Invitees will be added to the team either they accept the invitation
            or not.
          </Text>
        </Form.Item>
        <Form.Item
        name="jobTitle"
        label='Job Title'
        >
            <Input placeholder="Select the job title (Optional)"/>
        </Form.Item>
        <Form.Item
        name="access"
        label="Access"
        rules={[{required: true}]}
        >
            <Select
      defaultValue="member"
      style={{ width: '100%' }}
      options={[
        { value: 'admin', label: 'Admin' },
        { value: 'member', label: 'Member' },
      ]}
    />
        </Form.Item>
        <Form.Item>
          <Space style={{ width: '100%' }}>
            <Button type="primary" htmlType="submit" style={{width: '330px'}}>
              Add to team
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default InviteDrawer;
