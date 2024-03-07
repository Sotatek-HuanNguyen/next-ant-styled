import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';

import * as S from './index.styles';

export const ProfileOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation('common');

  return (
    <div {...props}>
      <S.Text>
        <Link href="/profile">{t('header.profile')}</Link>
      </S.Text>
      <S.ItemsDivider />
      <S.Text>
        <Link href="/logout">{t('header.logout')}</Link>
      </S.Text>
    </div>
  );
};
