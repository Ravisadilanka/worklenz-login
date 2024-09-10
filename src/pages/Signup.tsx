import React from "react";
import { LockOutlined, UserOutlined, EyeOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Flex, Row, Col } from 'antd';
import Logo from '../assets/worklenz.png';
import { Typography } from 'antd';
import googleIcon from '../assets/google.png';

const { Text } = Typography;

const Signup: React.FC = () => {
    const onFinish = (values: { name: string; email: string; password: string }) => {
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
                    <Flex vertical align="center">
                        <img src={Logo} alt="Logo" style={{ height: 50 }} />
                        <Text type="secondary">Create your account.</Text>
                    </Flex>
                    <Form
                        labelCol={{ span: 18 }}
                        wrapperCol={{ span: 36 }}
                        name="signSignup"
                        initialValues={{ remember: true }}
                        style={{ width: '100%' }}
                        onFinish={onFinish}
                        layout="vertical"
                    >
                        <Form.Item
                            label="Full Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Enter your full name" style={{ height: '40px', fontSize: '16px' }} />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="Enter your email" style={{ height: '40px', fontSize: '16px' }} />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input prefix={<LockOutlined />} type="password" placeholder="Enter a strong password" suffix={<EyeOutlined />} style={{ height: '40px', fontSize: '16px' }} />
                            <Text type="secondary">Minimum of 8 characters, with upper and lowercase and a number and a symbol.</Text>
                        </Form.Item>
                        <Form.Item>
                            <Text>By signing up, you will agree to our <a href="">Privacy Policy</a> and <a href="">Terms of Use</a>.</Text>
                        </Form.Item>

                        <Form.Item>
                            <Flex vertical gap={4}>
                                <Button block type="primary" htmlType="submit" size="large" style={{ borderRadius: "4px" }}>
                                    <Text style={{ fontSize: '16px', color: "white" }}>Sign Up</Text>
                                </Button>
                                <Flex justify="center">OR</Flex>
                                <Button block size="large" style={{ borderRadius: "4px" }}>
                                    <img style={{ width: '18px' }} src={googleIcon} alt="google icon" />
                                    <Text style={{ fontSize: '16px' }}>Sign up with Google</Text>
                                </Button>
                            </Flex>
                        </Form.Item>
                        <Form.Item>
                            <Text>Already have an account? <a href="/">Log in</a></Text>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Signup;