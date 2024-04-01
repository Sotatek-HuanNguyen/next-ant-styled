import { BaseCol } from '@/components/common/base-col';
import { BaseDatePicker } from '@/components/common/date-picker';
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
        <S.Card title={t('dateTimePickers.basic')}>
          <BaseDatePicker />
          <BaseDatePicker picker="week" />
          <BaseDatePicker picker="month" />
          <BaseDatePicker picker="quarter" />
          <BaseDatePicker picker="year" />
        </S.Card>
        <S.Card title={t('dateTimePickers.sizes')}>
          <BaseDatePicker format="L" size="small" />
          <BaseDatePicker format="L" />
          <BaseDatePicker format="L" size="large" />
        </S.Card>
        <S.Card title={t('dateTimePickers.disabled')}>
          <BaseDatePicker format="L" disabled />
          <BaseDatePicker.RangePicker format="L" disabled />
        </S.Card>
        <S.Card title={t('dateTimePickers.range')}>
          <BaseDatePicker.RangePicker format="L" />
        </S.Card>
        <S.Card title={t('dateTimePickers.time')}>
          <BaseDatePicker.TimePicker />
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
