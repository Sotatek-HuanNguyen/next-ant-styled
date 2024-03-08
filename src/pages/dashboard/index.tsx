import { BaseCard } from '@/components/common/base-card';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

const DashBoard = () => {
  const { t } = useTranslation(['common']);
  return <BaseCard>{t('DashBoard')}</BaseCard>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common'])),
  },
});

DashBoard.layout = AdminLayout;

export default DashBoard;
