import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Demo1104 from '../../components/demo1104';
import Demo2103 from '../../components/demo2103';
import Demo2803 from '../../components/demo2803';
import Demo1403 from '../../components/demo2803';

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(1)
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Bài học ngày 11-04',
                            onClick: () => {
                                setSelectedIndex(1);
                            }
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: 'Bài học ngày 14-03',
                            onClick: () => {
                                setSelectedIndex(2);
                            }
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Bài học ngày 21-03',
                            onClick: () => {
                                setSelectedIndex(3);
                            }
                        },
                        {
                            key: '4',
                            icon: <UploadOutlined />,
                            label: 'Bài học ngày 28-04',
                            onClick: () => {
                                localStorage.clear();
                                window.location.reload();
                            }
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {selectedIndex == 1 ? <Demo1104 /> : selectedIndex == 2 ? <Demo1403 /> : <Demo2103 />}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard;