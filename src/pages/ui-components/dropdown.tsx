import { BaseButton } from '@/components/common/base-button';
import { BaseCol } from '@/components/common/base-col';
import { BaseDropdown } from '@/components/common/base-dropdown';
import { BaseSpace } from '@/components/common/base-space';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { DownOutlined } from '@ant-design/icons';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { styled } from 'styled-components';

import * as S from './index.style';

const ContextMenuWrapper = styled.div`
  height: 12.5rem;
  width: 18.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgrey;
`;

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);

  const basicItems = [
    {
      key: '1',
      label: t('dropdowns.firstItem'),
    },
    {
      key: '2',
      label: `${t('dropdowns.secondItem')} ${t('dropdowns.disabled')}`,
      icon: <DownOutlined />,
      disabled: true,
    },
    {
      key: '3',
      label: `${t('dropdowns.thirdItem')} ${t('dropdowns.disabled')}`,
      disabled: true,
    },
    {
      key: '4',
      label: t('dropdowns.dangerItem'),
      danger: true,
    },
  ];

  const positionItems = [
    {
      key: '1',
      label: t('dropdowns.firstItem'),
    },
    {
      key: '2',
      label: t('dropdowns.secondItem'),
    },
    {
      key: '3',
      label: t('dropdowns.thirdItem'),
    },
  ];

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('dropdowns.basic')}>
          <BaseDropdown menu={{ items: basicItems }}>
            <BaseButton onClick={(e) => e.preventDefault()}>
              {t('dropdowns.hoverMe')} <DownOutlined />
            </BaseButton>
          </BaseDropdown>
        </S.Card>
        <S.Card title={t('dropdowns.positions')}>
          <BaseSpace size={16} wrap>
            <BaseDropdown menu={{ items: basicItems }} placement="bottomLeft" arrow>
              <BaseButton>{t('dropdowns.bl')}</BaseButton>
            </BaseDropdown>
            <BaseDropdown menu={{ items: basicItems }} placement="bottom" arrow>
              <BaseButton>{t('dropdowns.b')}</BaseButton>
            </BaseDropdown>
            <BaseDropdown menu={{ items: basicItems }} placement="bottomRight" arrow>
              <BaseButton>{t('dropdowns.br')}</BaseButton>
            </BaseDropdown>
            <BaseDropdown menu={{ items: basicItems }} placement="topLeft" arrow>
              <BaseButton>{t('dropdowns.tl')}</BaseButton>
            </BaseDropdown>
            <BaseDropdown menu={{ items: basicItems }} placement="top" arrow>
              <BaseButton>{t('dropdowns.t')}</BaseButton>
            </BaseDropdown>
            <BaseDropdown menu={{ items: basicItems }} placement="topRight" arrow>
              <BaseButton>{t('dropdowns.tr')}</BaseButton>
            </BaseDropdown>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('dropdowns.clickable')}>
          <BaseDropdown menu={{ items: positionItems }} trigger={['click']}>
            <BaseButton onClick={(e) => e.preventDefault()}>
              {t('dropdowns.clickMe')} <DownOutlined />
            </BaseButton>
          </BaseDropdown>
        </S.Card>
        <S.Card title={t('dropdowns.context')}>
          <BaseDropdown menu={{ items: positionItems }} trigger={['contextMenu']}>
            <ContextMenuWrapper>{t('dropdowns.rightClick')}</ContextMenuWrapper>
          </BaseDropdown>
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

ExamplePage.layout = AdminLayout;

export default ExamplePage;
