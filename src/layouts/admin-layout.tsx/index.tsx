import { DashboardOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { WithRouterProps } from 'next/dist/client/with-router';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextRouter, withRouter } from 'next/router';
import React, { useState } from 'react';

const { Header, Sider, Content } = Layout;

interface Router extends NextRouter {
  path: string;
  breadcrumbName: string;
}

interface Props extends WithRouterProps {
  router: Router;
}

const AppLayout = (props: React.PropsWithChildren<Props>) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const router = useRouter();
  const [current, setCurrent] = useState<string>();

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    router.push(e.key);
    console.log('🚀 ~ file: index.tsx:32 ~ AppLayout ~ e:', e);
  };

  const onChangeIsCollapsed = (isCollapsed: boolean) => {
    setIsCollapsed(isCollapsed);
  };

  const items: MenuProps['items'] = [
    {
      label: 'Dashboard',
      key: '/dashboard',
      icon: <DashboardOutlined />,
    },
    {
      label: 'Submenu',
      key: 'sub-menu',
      icon: <SettingOutlined />,
      children: [
        {
          label: 'Demo components',
          key: '/demo',
        },
      ],
    },
  ];

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Header style={{ background: 'white' }}>Header</Header>

      <Layout hasSider>
        <Sider theme="light" collapsible collapsed={isCollapsed} onCollapse={onChangeIsCollapsed}>
          <Link href="/menu1">
            <div className="App-logo" />
          </Link>

          <Menu
            onClick={onClick}
            defaultOpenKeys={['/dashboard']}
            selectedKeys={[current || router.asPath]}
            mode="inline"
            items={items}
          />
        </Sider>

        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(AppLayout);
