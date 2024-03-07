import { BaseAvatar } from '@/components/common/base-avatar';
import { BaseCol } from '@/components/common/base-col';
import { BasePopover } from '@/components/common/base-popover';
import { BaseRow } from '@/components/common/base-row';
import { useResponsive } from '@/hooks/useResponsive';
import React from 'react';

import { ProfileOverlay } from '../profile-overlay';
import * as S from './index.styles';

export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive();

  const user = {
    id: 1,
    firstName: 'Haky',
    lastName: 'Nguyen',
    imgUrl:
      'https://lh3.googleusercontent.com/ogw/AF2bZyg48oTVaU3SBJseQsw622i3nE2VzQ2pq5cfQs8E=s32-c-mo',
    userName: '@haky2k5',
    email: {
      name: 'haky@sotatek.com',
      verified: true,
    },
  };

  return user ? (
    <BasePopover content={<ProfileOverlay />} trigger="click">
      <S.ProfileDropdownHeader as={BaseRow} gutter={[10, 10]} align="middle">
        <BaseCol>
          <BaseAvatar src={user.imgUrl} alt="User" shape="circle" size={40} />
        </BaseCol>
        {isTablet && (
          <BaseCol>
            <span>{`${user.firstName} ${user.lastName[0]}`}</span>
          </BaseCol>
        )}
      </S.ProfileDropdownHeader>
    </BasePopover>
  ) : null;
};
