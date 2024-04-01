import { BaseButton } from '@/components/common/base-button';
import { BaseCol } from '@/components/common/base-col';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import { useFeedback } from '@/hooks/useFeedback';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import * as S from './index.style';

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const { notification } = useFeedback();

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('notifications.basic')}>
          <BaseButton
            severity="info"
            onClick={() =>
              notification.info({
                message: t('notifications.infoTitle'),
                description: t('notifications.infoDescription'),
              })
            }
          >
            {t('notifications.basicTitle')}
          </BaseButton>
        </S.Card>
        <S.Card title={t('notifications.types')}>
          <BaseButton
            severity="success"
            onClick={() =>
              notification.success({
                message: t('notifications.successTitle'),
                description: t('notifications.successDescription'),
              })
            }
          >
            {t('notifications.success')}
          </BaseButton>
          <BaseButton
            severity="info"
            onClick={() =>
              notification.info({
                message: t('notifications.infoTitle'),
                description: t('notifications.infoDescription'),
              })
            }
          >
            {t('notifications.info')}
          </BaseButton>
          <BaseButton
            severity="warning"
            onClick={() =>
              notification.warning({
                message: t('notifications.warningTitle'),
                description: t('notifications.warningDescription'),
              })
            }
          >
            {t('notifications.warning')}
          </BaseButton>
          <BaseButton
            severity="error"
            onClick={() =>
              notification.error({
                message: t('notifications.errorTitle'),
                description: t('notifications.errorDescription'),
              })
            }
          >
            {t('notifications.error')}
          </BaseButton>
        </S.Card>
        <S.Card title={t('notifications.withoutDescription')}>
          <BaseButton
            severity="success"
            onClick={() =>
              notification.success({
                message: t('notifications.successTitle'),
              })
            }
          >
            {t('notifications.success')}
          </BaseButton>
          <BaseButton
            severity="info"
            onClick={() =>
              notification.info({
                message: t('notifications.infoTitle'),
              })
            }
          >
            {t('notifications.info')}
          </BaseButton>
          <BaseButton
            severity="warning"
            onClick={() =>
              notification.warning({
                message: t('notifications.warningTitle'),
              })
            }
          >
            {t('notifications.warning')}
          </BaseButton>
          <BaseButton
            severity="error"
            onClick={() =>
              notification.error({
                message: t('notifications.errorTitle'),
              })
            }
          >
            {t('notifications.error')}
          </BaseButton>
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
