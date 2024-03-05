import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout.tsx';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';

const Home = () => {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    router.push('/dashboard');
  }
  return <></>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common'])),
    },
  };
};

Home.layout = AdminLayout;
export default Home;
