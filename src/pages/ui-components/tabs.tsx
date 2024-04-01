import { BaseCol } from '@/components/common/base-col';
import { BaseRadio } from '@/components/common/base-radio';
import { BaseSpace } from '@/components/common/base-space';
import { BaseTabs } from '@/components/common/base-tabs';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useMemo, useState } from 'react';

import * as S from './index.style';

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const [tabPosition, setTabPosition] = useState<'top' | 'left' | 'right' | 'bottom'>('top');

  const commonTabs = useMemo(
    () => [
      {
        key: '1',
        label: `${t('tabs.tab')} 1`,
        children: `${t('tabs.tabContent')} 1`,
      },
      {
        key: '2',
        label: `${t('tabs.tab')} 2`,
        children: `${t('tabs.tabContent')} 2`,
      },
      {
        key: '3',
        label: `${t('tabs.tab')} 3`,
        children: `${t('tabs.tabContent')} 3`,
      },
      {
        key: '4',
        label: `${t('tabs.tab')} 4`,
        children: `${t('tabs.tabContent')} 4`,
      },
    ],
    [t]
  );

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('tabs.basic')}>
          <BaseTabs defaultActiveKey="1" items={commonTabs} />
        </S.Card>
        <S.Card title={t('tabs.disabled')}>
          <BaseTabs
            defaultActiveKey="1"
            items={commonTabs.map((tab) => ({ ...tab, disabled: true }))}
          />
        </S.Card>
        <S.Card title={t('tabs.withIcon')}>
          <BaseTabs
            defaultActiveKey="2"
            items={[
              {
                key: '1',
                label: (
                  <span>
                    <AppleOutlined />
                    {t('tabs.tab')} 1
                  </span>
                ),
                children: `${t('tabs.tabContent')} 1`,
              },
              {
                key: '2',
                label: (
                  <span>
                    <AndroidOutlined />
                    {t('tabs.tab')} 2
                  </span>
                ),
                children: `${t('tabs.tabContent')} 2`,
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('tabs.positions')}>
          <BaseSpace direction="vertical" size={20}>
            <BaseSpace wrap>
              {t('tabs.tabPosition')}
              <BaseRadio.Group
                value={tabPosition}
                onChange={(event) => setTabPosition(event.target.value)}
              >
                <BaseRadio.Button value="top">{t('tabs.top')}</BaseRadio.Button>
                <BaseRadio.Button value="bottom">{t('tabs.bottom')}</BaseRadio.Button>
                <BaseRadio.Button value="left">{t('tabs.left')}</BaseRadio.Button>
                <BaseRadio.Button value="right">{t('tabs.right')}</BaseRadio.Button>
              </BaseRadio.Group>
            </BaseSpace>
            <BaseTabs
              tabPosition={tabPosition}
              items={[
                {
                  key: '1',
                  label: `${t('tabs.tab')} 1`,
                  children: `${t('tabs.tabContent')} 1`,
                },
                {
                  key: '2',
                  label: `${t('tabs.tab')} 2`,
                  children: `${t('tabs.tabContent')} 2`,
                },
                {
                  key: '3',
                  label: `${t('tabs.tab')} 3`,
                  children: `${t('tabs.tabContent')} 3`,
                },
              ]}
            />
          </BaseSpace>
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
