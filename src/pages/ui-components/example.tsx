import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
// import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

// import * as S from './index.style';

const DashBoard = () => {
  // const { t } = useTranslation(['forms', 'common']);
  return (
    <>
      <SeoHead title="UI Components" />
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
