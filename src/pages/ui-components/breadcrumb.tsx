import { BaseBreadcrumb, BaseBreadcrumbItemType } from '@/components/common/base-breadcrumb';
import { BaseCol } from '@/components/common/base-col';
import { BaseSpace } from '@/components/common/base-space';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';

import * as S from './index.style';

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const { pathname: href } = useRouter();

  const menuItems: Required<BaseBreadcrumbItemType>['menu']['items'] = [
    { label: t('breadcrumbs.general') },
    { label: t('breadcrumbs.layout') },
    { label: t('breadcrumbs.navigation') },
  ];

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('breadcrumbs.basic')}>
          <BaseBreadcrumb
            items={[
              { href, title: t('breadcrumbs.home') },
              { href, title: t('breadcrumbs.applicationCenter') },
              { href, title: t('breadcrumbs.applicationList') },
              { href, title: t('breadcrumbs.application') },
            ]}
          />
        </S.Card>
        <S.Card title={t('breadcrumbs.withIcon')}>
          <BaseBreadcrumb
            items={[
              { href, title: <HomeOutlined /> },
              {
                href,
                title: (
                  <BaseSpace>
                    <UserOutlined />
                    <span>{t('breadcrumbs.applicationList')}</span>
                  </BaseSpace>
                ),
              },
              { href, title: t('breadcrumbs.application') },
            ]}
          />
        </S.Card>
        <S.Card title={t('breadcrumbs.customSeparator')}>
          <BaseBreadcrumb
            separator=">"
            items={[
              { href, title: t('breadcrumbs.home') },
              { href, title: t('breadcrumbs.applicationCenter') },
              { href, title: t('breadcrumbs.applicationList') },
              { href, title: t('breadcrumbs.application') },
            ]}
          />
        </S.Card>
        <S.Card title={t('breadcrumbs.withDropdown')}>
          <BaseBreadcrumb
            items={[
              { href, title: t('breadcrumbs.antd') },
              { href, title: t('breadcrumbs.component') },
              {
                menu: {
                  items: menuItems.map((item) => ({ key: item.label as React.Key, ...item })),
                },
                title: t('breadcrumbs.general'),
              },
              { href, title: t('breadcrumbs.button') },
            ]}
          />
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
