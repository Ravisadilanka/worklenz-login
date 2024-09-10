import React, { useTransition } from "react";
import { LockOutlined, UserOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Col, Typography } from "antd";
import Logo from "../assets/worklenz.png";
import googleIcon from "../assets/google.png";
import useToken from "antd/es/theme/useToken";
import { useTranslation } from "react-i18next";

const { Text } = Typography;

interface LoginProps {
  isDarkMode: boolean;
}

const Login: React.FC<LoginProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const onFinish = (values: {
    email: string;
    password: string;
    remember: boolean;
  }) => {
    console.log("Received values of form: ", values);
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              padding: "26px",
            }}
          >
            <img src={Logo} alt="Logo" style={{ height: 50 }} />
            <Text type="secondary">{t("loginTitle")}</Text>
          </div>

          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            style={{ width: "100%" }}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: t("emailRequired") }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder={t("loginEmailPlaceholder")}
                style={{ height: "40px", fontSize: "16px" }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: t("passwordRequired") }]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder={t("loginPasswordPlaceholder")}
                suffix={<EyeOutlined />}
                style={{ height: "40px", fontSize: "16px" }}
              />
            </Form.Item>

            <Form.Item>
              <Row justify="space-between" align="middle">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>{t("rememberMe")}</Checkbox>
                </Form.Item>
                <a href="/reset-password">{t("forgotPassword")}</a>
              </Row>
            </Form.Item>

            <Form.Item>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  size="large"
                  style={{ borderRadius: "4px" }}
                >
                  <Text style={{ fontSize: "16px", color: "white" }}>
                    {t("loginButton")}
                  </Text>
                </Button>
                <div style={{ textAlign: "center" }}>{t("or")}</div>
                <Button block size="large" style={{ borderRadius: "4px" }}>
                  <img
                    style={{ width: "18px" }}
                    src={googleIcon}
                    alt="google icon"
                  />
                  <Text style={{ fontSize: "16px" }}>
                    {t("signInWithGoogle")}
                  </Text>
                </Button>
              </div>
            </Form.Item>
            <Form.Item>
              <Text>
                {t("dontHaveAccount")} <a href="/signup">{t("signUp")}</a>
              </Text>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
