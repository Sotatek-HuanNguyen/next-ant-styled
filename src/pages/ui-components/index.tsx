import { BaseCard } from '@/components/common/base-card';
import { BaseCol } from '@/components/common/base-col';
import { BaseRow } from '@/components/common/base-row';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const DashBoard = () => {
  const { t } = useTranslation(['common']);
  return (
    <>
      <SeoHead title="UI Components" />
      <BaseRow gutter={[30, 30]}>
        <BaseCol xs={24} sm={24} xl={10}>
          <BaseCard id="validation form" title={t('forms.validationForm')} padding="1.25rem">
            {/* <ValidationForm /> */}
          </BaseCard>
        </BaseCol>

        <BaseCol xs={24} sm={24} xl={14}>
          <BaseRow gutter={[30, 30]}>
            <BaseCol span={24}>
              <BaseCard id="control-form" title={t('forms.controlForm')} padding="1.25rem">
                {/* <ControlForm /> */}
              </BaseCard>
            </BaseCol>
            <BaseCol span={24}>
              <BaseCard id="dynamic-form" title={t('forms.dynamicForm')} padding="1.25rem">
                {/* <DynamicForm /> */}
              </BaseCard>
            </BaseCol>
            <BaseCol span={24}>
              <BaseCard id="step-form" title={t('forms.stepForm')} padding="1.25rem">
                {/* <StepForm /> */}
              </BaseCard>
            </BaseCol>
          </BaseRow>
        </BaseCol>
      </BaseRow>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common'])),
  },
});

DashBoard.layout = AdminLayout;

export default DashBoard;
