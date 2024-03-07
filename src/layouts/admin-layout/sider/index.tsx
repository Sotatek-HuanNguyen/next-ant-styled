import { Overlay } from '@/components/common/overlay';
import { useResponsive } from '@/hooks/useResponsive';
import React, { useMemo } from 'react';

import SiderMenu from '../sider-menu';
import { SiderLogo } from '../sider-menu/SiderLogo';
import * as S from './index.styles';

interface MainSiderProps {
  isCollapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

const MainSider: React.FC<MainSiderProps> = ({ isCollapsed, setCollapsed, ...props }) => {
  const { isDesktop, mobileOnly, tabletOnly } = useResponsive();

  const isCollapsible = useMemo(() => mobileOnly && tabletOnly, [mobileOnly, tabletOnly]);

  const toggleSider = () => setCollapsed(!isCollapsed);

  return (
    <>
      <S.Sider
        trigger={null}
        collapsed={!isDesktop && isCollapsed}
        collapsedWidth={tabletOnly ? 80 : 0}
        collapsible={isCollapsible}
        width={260}
        {...props}
      >
        <SiderLogo isSiderCollapsed={isCollapsed} toggleSider={toggleSider} />
        <S.SiderContent>
          <SiderMenu setCollapsed={setCollapsed} />
        </S.SiderContent>
      </S.Sider>
      {mobileOnly && <Overlay onClick={toggleSider} show={!isCollapsed} />}
    </>
  );
};

export default MainSider;
