import { BaseCol } from '@/components/common/base-col';
import { BaseRow } from '@/components/common/base-row';
import React from 'react';

import * as S from '../index.styles';
import { ProfileDropdown } from '../profile/profile-dropdown';

interface DesktopHeaderProps {
  isTwoColumnsLayout: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isTwoColumnsLayout }) => {
  return (
    <BaseRow justify="space-between" align="middle">
      <BaseCol lg={10} xxl={8}>
        <div className="">Title</div>
      </BaseCol>
      <S.ProfileColumn xl={8} xxl={7} $isTwoColumnsLayout={isTwoColumnsLayout}>
        <BaseRow align="middle" justify="end" gutter={[5, 5]}>
          <BaseCol>
            <ProfileDropdown />
          </BaseCol>
        </BaseRow>
      </S.ProfileColumn>
    </BaseRow>
  );
};
