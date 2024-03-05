import AdminLayout from '@/layouts/admin-layout.tsx';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

const DashBoard = () => {
  const { t } = useTranslation(['common']);
  return <div>{t('DashBoard')}</div>;
};

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
}

DashBoard.layout = AdminLayout;

export default DashBoard;
