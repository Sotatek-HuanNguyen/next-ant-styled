import { BaseAlert } from '@/components/common/base-alert';
import { BaseCol } from '@/components/common/base-col';
import { BaseSpace } from '@/components/common/base-space';
import { BaseSpin } from '@/components/common/base-spin';
import { GlobalSpinner } from '@/components/common/base-spinner/global-spinner';
import { BaseSwitch } from '@/components/common/base-switch';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { themeObject } from '@/styles/themes/theme-variables';
import { ChromeOutlined, LoadingOutlined, RedoOutlined } from '@ant-design/icons';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';

import * as S from './index.style';

const antIcon1 = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const antIcon2 = <RedoOutlined style={{ fontSize: 24 }} spin />;
const antIcon3 = <ChromeOutlined style={{ fontSize: 24 }} spin />;

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const [loading, setLoading] = useState<boolean>(false);
  const [delayLoading, setDelayLoading] = useState<boolean>(false);

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('spinners.globalAppSpinner')}>
          <GlobalSpinner color={themeObject['light'].spinnerBase} />
          <GlobalSpinner color={themeObject['dark'].spinnerBase} />
        </S.Card>
        <S.Card title={t('spinners.sizes')}>
          <BaseSpin size="small" />
          <BaseSpin />
          <BaseSpin size="large" />
        </S.Card>
        <S.Card title={t('spinners.customDescription')}>
          <BaseSpin tip={t('spinners.loading')}>{t('spinners.customDescription')}</BaseSpin>
        </S.Card>
        <S.Card title={t('spinners.customIndicator')}>
          <BaseSpin indicator={antIcon1} />
          <BaseSpin indicator={antIcon2} />
          <BaseSpin indicator={antIcon3} />
        </S.Card>
        <S.Card title={t('spinners.customLoading')}>
          <BaseSpace direction="vertical" size={16}>
            <BaseSpin spinning={loading}>
              <BaseAlert
                message={t('spinners.alertMessage')}
                description={t('spinners.alertDescription')}
                type="info"
              />
            </BaseSpin>
            <div>
              {t('spinners.loadingState')}
              <BaseSwitch checked={loading} onChange={() => setLoading(!loading)} />
            </div>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('spinners.customLoadingDelay')}>
          <BaseSpace direction="vertical" size={16}>
            <BaseSpin spinning={delayLoading} delay={500}>
              <BaseAlert
                message={t('spinners.alertMessage')}
                description={t('spinners.alertDescription')}
                type="info"
              />
            </BaseSpin>
            <div>
              {t('spinners.loadingState')}
              <BaseSwitch checked={delayLoading} onChange={() => setDelayLoading(!delayLoading)} />
            </div>
          </BaseSpace>
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
