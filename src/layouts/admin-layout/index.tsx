import { Header } from '@/components/header';
import React, { useState } from 'react';

import MainContent from './content';
import { MainHeader } from './header';
import * as S from './index.styles';
import MainSider from './sider';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isTwoColumnsLayout] = useState(false);
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <S.LayoutMaster>
      <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
      <S.LayoutMain>
        <MainHeader isTwoColumnsLayout={isTwoColumnsLayout}>
          <Header
            toggleSider={toggleSider}
            isSiderOpened={!siderCollapsed}
            isTwoColumnsLayout={isTwoColumnsLayout}
          />
        </MainHeader>
        <MainContent id="main-content" $isTwoColumnsLayout={isTwoColumnsLayout}>
          <div>{children}</div>
        </MainContent>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default AppLayout;
