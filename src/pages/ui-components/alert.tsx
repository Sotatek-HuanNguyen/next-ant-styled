import { BaseAlert } from '@/components/common/base-alert';
import { BaseButton } from '@/components/common/base-button';
import { BaseCol } from '@/components/common/base-col';
import { BaseSpace } from '@/components/common/base-space';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { styled } from 'styled-components';

import * as S from './index.style';

const Card = styled(S.Card)`
  .ant-card-body {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DashBoard = () => {
  const { t } = useTranslation(['forms', 'common']);
  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <Card title={t('alerts.basic')}>
          <BaseAlert message={t('alerts.success')} type="success" />
        </Card>
        <Card title={t('alerts.types')}>
          <BaseAlert message={t('alerts.success')} type="success" />
          <BaseAlert message={t('alerts.info')} type="info" />
          <BaseAlert message={t('alerts.warning')} type="warning" />
          <BaseAlert message={t('alerts.error')} type="error" />
        </Card>
        <Card title={t('alerts.closable')}>
          <BaseAlert message={t('alerts.warning')} type="warning" closable />
          <BaseAlert
            message={t('alerts.error')}
            description={t('alerts.errorDescription')}
            type="error"
            closable
          />
        </Card>
        <Card title={t('alerts.icons')}>
          <BaseAlert message={t('alerts.success')} type="success" showIcon />
          <BaseAlert message={t('alerts.info')} type="info" showIcon />
          <BaseAlert message={t('alerts.warning')} type="warning" showIcon closable />
          <BaseAlert message={t('alerts.error')} type="error" showIcon />
          <BaseAlert
            message={t('alerts.success')}
            description={t('alerts.successDescription')}
            type="success"
            showIcon
          />
          <BaseAlert
            message={t('alerts.info')}
            description={t('alerts.infoDescription')}
            type="info"
            showIcon
          />
          <BaseAlert
            message={t('alerts.warning')}
            description={t('alerts.warningDescription')}
            type="warning"
            showIcon
            closable
          />
          <BaseAlert
            message={t('alerts.error')}
            description={t('alerts.errorDescription')}
            type="error"
            showIcon
          />
        </Card>
        <Card title={t('alerts.customActions')}>
          <BaseAlert
            message={t('alerts.success')}
            type="success"
            showIcon
            action={
              <BaseButton size="small" type="text">
                {t('alerts.undo')}
              </BaseButton>
            }
            closable
          />
          <BaseAlert
            message={t('alerts.error')}
            showIcon
            description={t('alerts.errorDescription')}
            type="error"
            action={
              <BaseButton size="small" danger type="primary">
                {t('alerts.detail')}
              </BaseButton>
            }
          />
          <BaseAlert
            message={t('alerts.warning')}
            type="warning"
            action={
              <BaseSpace>
                <BaseButton size="small" ghost>
                  {t('alerts.done')}
                </BaseButton>
              </BaseSpace>
            }
            closable
          />
          <BaseAlert
            message={t('alerts.info')}
            description={t('alerts.infoDescription')}
            type="info"
            action={
              <BaseSpace direction="vertical">
                <BaseButton size="small" type="primary">
                  {t('alerts.accept')}
                </BaseButton>
                <BaseButton size="small" danger type="primary">
                  {t('alerts.decline')}
                </BaseButton>
              </BaseSpace>
            }
            closable
          />
        </Card>
      </BaseCol>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['forms', 'common'])),
  },
});

DashBoard.layout = AdminLayout;

export default DashBoard;
