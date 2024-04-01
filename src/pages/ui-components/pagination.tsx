import { BaseCol } from '@/components/common/base-col';
import { BasePagination } from '@/components/common/base-pagination';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import * as S from './index.style';

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('dataDisplay.pagination.basic')}>
          <BasePagination defaultCurrent={1} total={50} />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.manyPages')}>
          <BasePagination defaultCurrent={6} total={500} />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.pageSize')}>
          <BasePagination showSizeChanger defaultCurrent={3} total={500} />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.disabled')}>
          <BasePagination showSizeChanger defaultCurrent={3} total={500} disabled />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.quickJump')}>
          <BasePagination size="small" total={50} showSizeChanger showQuickJumper />
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
