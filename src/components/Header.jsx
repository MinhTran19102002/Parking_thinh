import React, { useContext, useEffect, useMemo, useState } from 'react';
import {
  Flex,
  Layout,
  Typography,
  theme,
} from 'antd';
import { DownOutlined, SettingTwoTone } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';


function Header() {
  const {
    token: { colorBgContainer, colorPrimary }
  } = theme.useToken();
  const location = useLocation();
  const { pathname = '' } = location;
  const title = `${pathname.slice(1).toUpperCase()}`;
  return (
    <Layout.Header
      style={{
        position: 'sticky',
        borderRadius: 15,
        top: 0,
        zIndex: 2,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: colorBgContainer,
        height: 60,
        boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.16)'
      }}
      className="px-4 py-2 border-1">
      <Flex justify="space-between" className="w-100">
        <Typography.Title level={4} style={{ margin: 'auto 0', color: colorPrimary }}>
          {title}
        </Typography.Title>
      </Flex>
    </Layout.Header>
  );
}

export default Header;
