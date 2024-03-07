import { DashboardOutlined, FormOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'sider.dashboard',
    key: 'dashboard',
    url: '/',
    icon: <DashboardOutlined />,
  },
  {
    title: 'sider.userManagement',
    key: 'users',
    url: '/users',
    icon: <UserOutlined />,
  },
  {
    title: 'sider.shipmentManagement',
    key: 'shipment',
    icon: <FormOutlined />,
    children: [
      {
        title: 'sider.orderManagement',
        key: 'order',
        url: '/shipment/order',
      },
    ],
  },
];
