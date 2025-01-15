import {
    CarOutlined,
    ContactsOutlined,
    DashboardOutlined,
    InteractionOutlined,
    LineChartOutlined,
    UserOutlined,
    UsergroupAddOutlined,
    CameraOutlined,
    SettingOutlined,
    HistoryOutlined,
    VideoCameraOutlined,
    DollarOutlined,
    FileTextOutlined
} from '@ant-design/icons';
import { lazy } from 'react';
const DashBoard = lazy(() => import('../pages/DashBoard'));
const Map = lazy(() => import('../pages/Map'));
const History = lazy(() => import('../pages/History'));

const publicRoutes = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/dashboard',
        element: <DashBoard />,
        icon: <DashboardOutlined />
    },
    {
        key: 'map',
        label: 'Map',
        path: '/map',
        element: <Map />,
        icon: <CarOutlined />
    },
    {
        key: 'history',
        label: 'History',
        path: '/history',
        element: <History />,
        icon: <HistoryOutlined />
    },
]

export { publicRoutes }