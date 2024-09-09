import React from "react";
import { LockOutlined, UserOutlined, EyeOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Segmented } from 'antd';
import Logo from '../assets/worklenz.png'
import { Space, Typography } from 'antd';
import googleIcon from '../assets/google.png'

const { Text, Link, Title } = Typography;

const Signup = () => {
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
                    <Text type="secondary">Create your account.</Text>
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
                            rules={[{ message: 'Please input your name!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Enter your full name" style={{ height: '40px', fontSize: '16px' }} />
                        </Form.Item>
                        <Form.Item
                        label="Email"
                            name="email"
                            rules={[{ message: 'Please input your Email!' }]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="Enter your email" style={{ height: '40px', fontSize: '16px' }} />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{message: 'Please input your Password!' }]}
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
                </Flex>
            </Flex>
        </div>
    );
};

export default Signup;