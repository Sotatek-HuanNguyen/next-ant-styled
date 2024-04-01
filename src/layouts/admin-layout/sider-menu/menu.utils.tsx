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
      {
        title: 'Badge',
        key: 'badge',
        url: '/ui-components/badge',
      },
      {
        title: 'Breadcrumb',
        key: 'breadcrumb',
        url: '/ui-components/breadcrumb',
      },
      {
        title: 'Button',
        key: 'button',
        url: '/ui-components/button',
      },
      {
        title: 'Checkbox',
        key: 'checkbox',
        url: '/ui-components/checkbox',
      },
      {
        title: 'Collapse',
        key: 'collapse',
        url: '/ui-components/collapse',
      },
      {
        title: 'DateTime Picker',
        key: 'date-picker',
        url: '/ui-components/date-picker',
      },
      {
        title: 'Dropdown',
        key: 'dropdown',
        url: '/ui-components/dropdown',
      },
      {
        title: 'Input',
        key: 'input',
        url: '/ui-components/input',
      },
      {
        title: 'Modal',
        key: 'modal',
        url: '/ui-components/modal',
      },
      {
        title: 'Notification',
        key: 'notification',
        url: '/ui-components/notification',
      },
      {
        title: 'Pagination',
        key: 'pagination',
        url: '/ui-components/pagination',
      },
      {
        title: 'Popconfirm',
        key: 'popconfirm',
        url: '/ui-components/popconfirm',
      },
      {
        title: 'Popover',
        key: 'popover',
        url: '/ui-components/popover',
      },
      {
        title: 'Progress',
        key: 'progress',
        url: '/ui-components/progress',
      },
      {
        title: 'Radio',
        key: 'radio',
        url: '/ui-components/radio',
      },
      {
        title: 'Rate',
        key: 'rate',
        url: '/ui-components/rate',
      },
      {
        title: 'Result',
        key: 'result',
        url: '/ui-components/result',
      },
      {
        title: 'Select',
        key: 'select',
        url: '/ui-components/select',
      },
      {
        title: 'Skeleton',
        key: 'skeleton',
        url: '/ui-components/skeleton',
      },
      {
        title: 'Spinner',
        key: 'spinner',
        url: '/ui-components/spinner',
      },
      {
        title: 'Steps',
        key: 'steps',
        url: '/ui-components/steps',
      },
      {
        title: 'Switch',
        key: 'switch',
        url: '/ui-components/switch',
      },
      {
        title: 'Tabs',
        key: 'tabs',
        url: '/ui-components/tabs',
      },
      {
        title: 'Upload',
        key: 'upload',
        url: '/ui-components/upload',
      },
    ],
  },
];
