import { BaseCard } from '@/components/common/base-card';
import { BaseCol } from '@/components/common/base-col';
import { BaseRow } from '@/components/common/base-row';
import SeoHead from '@/components/common/seo-header';
import { ControlForm } from '@/components/ui-components/forms/control-form';
import { DynamicForm } from '@/components/ui-components/forms/dynamic-form';
import { StepForm } from '@/components/ui-components/forms/step-form';
import { ValidationForm } from '@/components/ui-components/forms/validation-form';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const UIComponents = () => {
  const { t } = useTranslation(['common']);
  return (
    <>
      <SeoHead title="UI Components" />
      <BaseRow gutter={[30, 30]}>
        <BaseCol xs={24} sm={24} xl={10}>
          <BaseCard id="validation form" title={t('Validation Form')} padding="1.25rem">
            <ValidationForm />
          </BaseCard>
        </BaseCol>

        <BaseCol xs={24} sm={24} xl={14}>
          <BaseRow gutter={[30, 30]}>
            <BaseCol span={24}>
              <BaseCard id="control-form" title={t('Control Form')} padding="1.25rem">
                <ControlForm />
              </BaseCard>
            </BaseCol>
            <BaseCol span={24}>
              <BaseCard id="dynamic-form" title={t('Dynamic Form')} padding="1.25rem">
                <DynamicForm />
              </BaseCard>
            </BaseCol>
            <BaseCol span={24}>
              <BaseCard id="step-form" title={t('Step Form')} padding="1.25rem">
                <StepForm />
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
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common', 'forms'])),
  },
});

UIComponents.layout = AdminLayout;

export default UIComponents;
