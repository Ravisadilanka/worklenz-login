import React from "react";
import { LockOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Segmented, Row, Col } from 'antd';
import Logo from '../assets/worklenz.png'
import { Space, Typography } from 'antd';
import googleIcon from '../assets/google.png'
import { useNavigate } from "react-router-dom";

const { Text, Link, Title } = Typography;

const Reset_Password = () => {
    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const handleReturnToLogin = () => {
        navigate("/")
    }
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
                    <Flex vertical justify="center" align="center" style={{ textAlign: "center", padding: "26px" }} gap={6}>
                        <img src={Logo} alt="Logo" style={{ height: 50 }} />

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
                                <Button block size="large" style={{ borderRadius: "4px" }} onClick={handleReturnToLogin}>
                                    <Text style={{ fontSize: '16px' }}>Return to Login</Text>
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