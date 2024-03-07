import { RegisterForm } from '@/components/auth/register-form';
import { DEFAULT_LOCALE } from '@/constants';
import AuthLayout from '@/layouts/auth-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const Register = () => {
  return <RegisterForm />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['auth', 'common'])),
    },
  };
};

Register.layout = AuthLayout;
export default Register;
