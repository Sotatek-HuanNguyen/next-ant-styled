import SeoHead from '@/components/common/seo-header';
import Users from '@/components/users';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const UserManagement = () => {
  return (
    <>
      <SeoHead title="User Management" />
      <Users />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common'])),
  },
});

UserManagement.layout = AdminLayout;

export default UserManagement;
