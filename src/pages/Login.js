import React from "react";
import { LockOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Segmented } from 'antd';
import Logo from '../assets/worklenz.png'
import { Space, Typography } from 'antd';
import googleIcon from '../assets/google.png'

const { Text, Link, Title } = Typography;

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div>
            <Flex
                style={{
                    height: '100vh',
                    position: 'relative',
                }}
            >
                <Flex
                    justify="center"
                    align="center"
                    vertical
                    gap={6}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'white',
                        padding: '50px',
                        borderRadius: '4px',
                        width: '360px',
                    }}
                >
                    <img src={Logo} alt="Logo" style={{ height: 50 }} />
                    <Text type="secondary">Log Into your account.</Text>
                    <Form
                        labelCol={{ span: 18 }}
                        wrapperCol={{ span: 36 }}
                        name="login"
                        initialValues={{ remember: true }}
                        style={{ width: '100%' }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Username" style={{ height: '40px', fontSize: '16px' }} />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input prefix={<LockOutlined />} type="password" placeholder="Password" suffix={<EyeOutlined />} style={{ height: '40px', fontSize: '16px' }} />
                        </Form.Item>
                        <Form.Item>
                            <Flex justify="space-between" align="center">
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <a href="">Forgot password</a>
                            </Flex>
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
                        <Text>Don't have an account? <a href="">Sign Up</a></Text>
                        </Form.Item>
                    </Form>
                </Flex>
            </Flex>
        </div>
    );
};

export default Login;