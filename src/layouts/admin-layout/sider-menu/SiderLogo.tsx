import { useResponsive } from '@/hooks/useResponsive';
import { RightOutlined, WindowsOutlined } from '@ant-design/icons';
import React from 'react';

import * as S from '../sider/index.styles';

interface SiderLogoProps {
  isSiderCollapsed: boolean;
  toggleSider: () => void;
}
export const SiderLogo: React.FC<SiderLogoProps> = ({ isSiderCollapsed, toggleSider }) => {
  const { tabletOnly } = useResponsive();

  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink href="/">
        <WindowsOutlined width={'2rem'} height={45} />
        <S.BrandSpan>Admin</S.BrandSpan>
      </S.SiderLogoLink>
      {tabletOnly && (
        <S.CollapseButton
          shape="circle"
          size="small"
          $isCollapsed={isSiderCollapsed}
          icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
          onClick={toggleSider}
        />
      )}
    </S.SiderLogoDiv>
  );
};
