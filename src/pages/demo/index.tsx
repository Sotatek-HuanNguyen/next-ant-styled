import SearchIcon from '@/assets/images/svg/icon-search.svg';
import { BaseButton } from '@/components/common/base-button';
import { BaseDatePicker } from '@/components/common/date-picker';
import AdminLayout from '@/layouts/admin-layout.tsx';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const Demo = () => {
  return (
    <div>
      <BaseButton icon={<SearchIcon />} size="middle" type="primary">
        button
      </BaseButton>
      <BaseButton icon={<SearchIcon />} size="middle" type="primary" danger>
        button
      </BaseButton>
      <BaseDatePicker />
    </div>
  );
};

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
}

Demo.layout = AdminLayout;

export default Demo;
