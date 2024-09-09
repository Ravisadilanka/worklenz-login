import React from "react";
import { LockOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Segmented } from 'antd';
import Logo from '../assets/worklenz.png'
import { Space, Typography } from 'antd';
import googleIcon from '../assets/google.png'

const { Text, Link, Title } = Typography;

const Reset_Password = () => {
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
                    <Flex justify="center" align="center" style={{textAlign: "center"}}>

                    <Text type="secondary">Please enter your email address. You will receive a link to create a new password via email.</Text>
                    </Flex>
                    <Form
                        labelCol={{ span: 18 }}
                        wrapperCol={{ span: 36 }}
                        name="login"
                        initialValues={{ remember: true }}
                        style={{ width: '100%' }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Enter your email" style={{ height: '40px', fontSize: '16px' }} />
                        </Form.Item>

                        <Form.Item>
                            <Flex vertical gap={4}>
                                <Button block type="primary" htmlType="submit" size="large" style={{ borderRadius: "4px" }}>
                                    <Text style={{ fontSize: '16px', color: "white" }}>Reset Password</Text>
                                </Button>
                                <Flex justify="center">OR</Flex>
                                <Button block size="large" style={{ borderRadius: "4px" }}>
                                    <Text style={{ fontSize: '16px' }}>Return to Login</Text>
                                </Button>
                            </Flex>
                        </Form.Item>
                    </Form>
                </Flex>
            </Flex>
        </div>
    );
};

export default Reset_Password;