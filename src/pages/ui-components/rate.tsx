import { BaseCol } from '@/components/common/base-col';
import { BaseRate } from '@/components/common/base-rate';
import { BaseSpace } from '@/components/common/base-space';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import * as S from './index.style';

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const customIcons = [
    <FrownOutlined key={1} />,
    <FrownOutlined key={2} />,
    <MehOutlined key={3} />,
    <SmileOutlined key={4} />,
    <SmileOutlined key={5} />,
  ];

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('rates.basic')}>
          <BaseRate />
        </S.Card>
        <S.Card title={t('rates.halfStar')}>
          <BaseRate allowHalf defaultValue={2.5} />
        </S.Card>
        <S.Card title={t('rates.readOnly')}>
          <BaseRate disabled defaultValue={2} />
        </S.Card>
        <S.Card title={t('rates.customIcons')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseRate defaultValue={2} character={({ index }) => (index as number) + 1} />
            <BaseRate
              defaultValue={3}
              character={({ index }) => customIcons[(index as number) + 1]}
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
