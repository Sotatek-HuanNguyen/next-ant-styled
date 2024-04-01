import { BaseAvatar } from '@/components/common/base-avatar';
import { BaseBadge } from '@/components/common/base-badge';
import { BaseCol } from '@/components/common/base-col';
import { BaseTooltip } from '@/components/common/base-tooltip';
import SeoHead from '@/components/common/seo-header';
import { BASE_COLORS, DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import * as S from './index.style';

const DashBoard = () => {
  const { t } = useTranslation(['forms', 'common']);
  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('dataDisplay.avatars.sizes')}>
          <BaseAvatar size="small" icon={<UserOutlined />} />
          <BaseAvatar icon={<UserOutlined />} />
          <BaseAvatar size="large" icon={<UserOutlined />} />
          <BaseAvatar size={64} icon={<UserOutlined />} />
        </S.Card>
        <S.Card title={t('dataDisplay.avatars.shapes')}>
          <BaseAvatar size={45} icon={<UserOutlined />} />
          <BaseAvatar size={45} shape="square" icon={<UserOutlined />} />
        </S.Card>
        <S.Card title={t('dataDisplay.avatars.groups')}>
          <BaseAvatar.Group
            maxCount={2}
            size={45}
            maxStyle={{ color: BASE_COLORS.red, backgroundColor: BASE_COLORS.orange }}
          >
            <BaseAvatar size={45} src="https://joeschmoe.io/api/v1/random" />
            <BaseAvatar size={45} style={{ backgroundColor: BASE_COLORS.red }}>
              K
            </BaseAvatar>
            <BaseTooltip title={t('dataDisplay.avatars.user')} placement="top">
              <BaseAvatar
                size={45}
                style={{ backgroundColor: BASE_COLORS.green }}
                icon={<UserOutlined />}
              />
            </BaseTooltip>
            <BaseAvatar
              size={45}
              style={{ backgroundColor: BASE_COLORS.blue }}
              icon={<AntDesignOutlined />}
            />
          </BaseAvatar.Group>
        </S.Card>
        <S.Card title={t('dataDisplay.avatars.badge')}>
          <BaseBadge count={1}>
            <BaseAvatar size={45} shape="square" icon={<UserOutlined />} />
          </BaseBadge>
          <BaseBadge dot>
            <BaseAvatar size={45} shape="square" icon={<UserOutlined />} />
          </BaseBadge>
        </S.Card>
      </BaseCol>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'forms'])),
  },
});

DashBoard.layout = AdminLayout;

export default DashBoard;
