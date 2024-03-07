import { BaseCol } from '@/components/common/base-col';
import { BaseRow } from '@/components/common/base-row';
import React from 'react';

import * as S from '../index.styles';
import { ProfileDropdown } from '../profile/profile-dropdown';

interface MobileHeaderProps {
  toggleSider: () => void;
  isSiderOpened: boolean;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleSider, isSiderOpened }) => {
  return (
    <BaseRow justify="space-between" align="middle">
      <BaseCol>
        <ProfileDropdown />
      </BaseCol>

      <S.BurgerCol>
        <S.MobileBurger onClick={toggleSider} isCross={isSiderOpened} />
      </S.BurgerCol>
    </BaseRow>
  );
};
