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
    title: 'UI Components',
    key: 'components',
    icon: <FormOutlined />,
    children: [
      {
        title: 'Form',
        key: 'order',
        url: '/ui-components',
      },
      {
        title: 'Alert',
        key: 'alerts',
        url: '/ui-components/alert',
      },
      {
        title: 'Avatar',
        key: 'avatar',
        url: '/ui-components/avatar',
      },
      {
        title: 'AutoComplete',
        key: 'auto-complete',
        url: '/ui-components/auto-complete',
      },
    ],
  },
];
