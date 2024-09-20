import React from "react";
import {
  LockOutlined,
  UserOutlined,
  EyeOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Flex, Row, Col } from "antd";
import Logo from "../assets/worklenz.png";
import { Typography } from "antd";
import googleIcon from "../assets/google.png";
import { useTranslation } from "react-i18next";
import FormItem from "antd/es/form/FormItem";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ThemeButton from "../components/ThemeButton";
import LanguageButton from "../components/LanguageButton";

const { Text } = Typography;

const Signup: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const { t } = useTranslation("signup");
  const onFinish = (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 1000,
          display: "flex",
        }}
      >
        <ThemeButton />
        <LanguageButton />
      </div>
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
          <Flex vertical align="center">
            <img src={Logo} alt="Logo" style={{ height: 50 }} />
            <Text type="secondary">{t("signUpTitle")}</Text>
          </Flex>
          <Form
            labelCol={{ span: 18 }}
            wrapperCol={{ span: 36 }}
            name="signup"
            initialValues={{ remember: true }}
            style={{ width: "100%" }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              label={t("fullName")}
              name="name"
              rules={[{ required: true, message: t("nameRequired") }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder={t("enterYourFullName")}
                style={{ height: "40px", fontSize: "16px" }}
              />
            </Form.Item>
            <Form.Item
              label={t("email")}
              name="email"
              rules={[{ required: true, message: t("emailRequired") }]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder={t("enterYourEmail")}
                style={{ height: "40px", fontSize: "16px" }}
              />
            </Form.Item>
            <Form.Item
              label={t("password")}
              name="password"
              rules={[{ required: true, message: t("passwordRequired") }]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder={t("enterAStrongPassword")}
                suffix={<EyeOutlined />}
                style={{ height: "40px", fontSize: "16px" }}
              />
            </Form.Item>
            <Form.Item>
              <Text type="secondary" style={{}}>
                {t("passwordHint")}
              </Text>
            </Form.Item>
            <Form.Item>
              <Text>
                {t("condtionTag")} <a href="">{t("privacyPolicy")}</a>{" "}
                {t("and")} <a href="">{t("termsOfUse")}</a>.
              </Text>
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
                    {t("signUp")}
                  </Text>
                </Button>
                <Flex justify="center">{t("or")}</Flex>
                <Button block size="large" style={{ borderRadius: "4px" }}>
                  <img
                    style={{ width: "18px" }}
                    src={googleIcon}
                    alt="google icon"
                  />
                  <Text style={{ fontSize: "16px" }}>
                    {t("signUpWithGoogle")}
                  </Text>
                </Button>
              </Flex>
            </Form.Item>
            <Form.Item>
              <Text>
                {t("alreadyHaveAnAccount")} <a href="/">{t("loginButton")}</a>
              </Text>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
