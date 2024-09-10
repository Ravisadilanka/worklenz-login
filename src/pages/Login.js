import React from "react";
import { LockOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col, Typography, Flex } from 'antd';
import Logo from '../assets/worklenz.png';
import googleIcon from '../assets/google.png';

const { Text, Title } = Typography;

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <Row
                justify="center"
                align="middle"
                style={{
                    height: '100vh',
                }}
            >
                <Col
                    xs={22}
                    sm={16}
                    md={12}
                    lg={8}
                    xl={7}
                    style={{
                        backgroundColor: 'white',
                        padding: '40px',
                        borderRadius: '4px',
                    }}
                >
                    <Flex vertical align="center" gap={6} style={{ padding: "26px" }}>
                        <img src={Logo} alt="Logo" style={{ height: 50 }} />
                        <Text type="secondary">Log Into your account.</Text>
                    </Flex>

                    <Form
                        name="login"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        style={{ width: '100%' }}
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Email"
                                style={{ height: '40px', fontSize: '16px' }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Password"
                                suffix={<EyeOutlined />}
                                style={{ height: '40px', fontSize: '16px' }}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Row justify="space-between" align="middle">
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <a href="/reset-password">Forgot password?</a>
                            </Row>
                        </Form.Item>

                        <Form.Item>
                            <Flex vertical gap={4}>
                                <Button block type="primary" htmlType="submit" size="large" style={{ borderRadius: "4px" }}>
                                    <Text style={{ fontSize: '16px', color: "white" }}>Log in</Text>
                                </Button>
                                <Flex justify="center">OR</Flex>
                                <Button block size="large" style={{ borderRadius: "4px" }}>
                                    <img style={{ width: '18px' }} src={googleIcon} alt="google icon" />
                                    <Text style={{ fontSize: '16px' }}>Sign in with Google</Text>
                                </Button>
                            </Flex>
                        </Form.Item>
                        <Form.Item>
                            <Text>Don't have an account? <a href="/signup">Sign Up</a></Text>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
