import React from "react";
import { LockOutlined, UserOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex, Row, Col } from "antd";
import Logo from "../assets/worklenz.png";
import { Typography } from "antd";
import googleIcon from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const { Text } = Typography;


const Reset_Password: React.FC= () => {

  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)

  const { t } = useTranslation('reset_password');
  const navigate = useNavigate();

  const onFinish = (values: { email: string }) => {
    console.log("Received values of form: ", values);
  };

  const handleReturnToLogin = () => {
    navigate("/");
  };

  return (
    <div>
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Col
          xs={22}
          sm={16}
          md={12}
          lg={8}
          xl={7}
          style={{
            backgroundColor: `${isDarkMode ? "#141414" : "white"}`,
            padding: "40px",
            borderRadius: "4px",
          }}
        >
          <Flex
            vertical
            justify="center"
            align="center"
            style={{ textAlign: "center", padding: "26px" }}
            gap={6}
          >
            <img src={Logo} alt="Logo" style={{ height: 50 }} />

            <Text type="secondary">{t("forgetPasswordTitle")}</Text>
          </Flex>
          <Form
            labelCol={{ span: 18 }}
            wrapperCol={{ span: 36 }}
            name="login"
            initialValues={{ remember: true }}
            style={{ width: "100%" }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: t("emailRequired") }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder={t("enterYourEmail")}
                style={{ height: "40px", fontSize: "16px" }}
              />
            </Form.Item>

            <Form.Item>
              <Flex vertical gap={4}>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  size="large"
                  style={{ borderRadius: "4px" }}
                >
                  <Text style={{ fontSize: "16px", color: "white" }}>
                    {t("resetPassword")}
                  </Text>
                </Button>
                <Flex justify="center">{t("or")}</Flex>
                <Button
                  block
                  size="large"
                  style={{ borderRadius: "4px" }}
                  onClick={handleReturnToLogin}
                >
                  <Text style={{ fontSize: "16px" }}>{t("returnToLogin")}</Text>
                </Button>
              </Flex>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Reset_Password;
