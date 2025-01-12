
import LOGO from '../assets/logo/main.svg?url'
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Flex, Image, Layout, Menu, Space, Typography, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    VideoCameraOutlined,
    UploadOutlined
} from "@ant-design/icons";




function Sider({ routes }) {
    const [sidebar, setSidebar] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const { token } = theme.useToken();
    const { Sider, Content } = Layout;
    const { SubMenu } = Menu;
    const [current, setCurrent] = useState({});
    const navigate = useNavigate();
    const location = useLocation();


    const handleChangePage = ({ item }) => {
        navigate(item.props.path);
        setCurrent({
            ...current,
            selectedKeys: item.props.path.split('/').filter(Boolean),
            path: item.props.path
        });
    };

    const handleExpandSubmenu = (keys) => {
        setCurrent({ ...current, openKeys: keys });
    };

    useEffect(() => {
        if (location) {
            if (location.pathname != current?.path) {
                setCurrent({
                    selectedKeys: location.pathname.split('/').filter(Boolean),
                    openKeys: [...(current.openKeys || []), location.pathname.split('/').filter(Boolean)[0]],
                    path: location.pathname
                });
            }
        }
    }, [location]);

    return (

        <Layout.Sider collapsible collapsed={collapsed}
            width={200}
            className="py-4"
            theme="dark"
            onCollapse={(value) => setCollapsed(value)}
            style={
                {
                    // background: token.colorBgContainer
                    paddingBottom: 64,
                }
            }
        >

            <Flex vertical className="px-2 mt-1" align="center">
                <Image src={LOGO} width={40} preview={false} />
                {!collapsed && (
                    <Typography.Title level={4} className="text-center " style={{
                        color: token.colorPrimary
                    }}>
                        Parking Management
                    </Typography.Title>
                )}
            </Flex>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                className={`mt-5 ${!collapsed && 'notCollapsed'}`}
                items={routes}
                selectedKeys={current?.selectedKeys}
                openKeys={current?.openKeys}
                onSelect={handleChangePage}
                onOpenChange={handleExpandSubmenu}
            />

        </Layout.Sider>
    );
}

export default Sider;