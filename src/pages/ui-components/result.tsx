import { BaseButton } from '@/components/common/base-button';
import { BaseCol } from '@/components/common/base-col';
import { BaseResult } from '@/components/common/base-result';
import { BaseRow } from '@/components/common/base-row';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useMemo } from 'react';
import { styled } from 'styled-components';

import * as S from './index.style';

const Card = styled(S.Card)`
  .ant-card-body {
    justify-content: center;
  }
`;

const BuyButton = styled(BaseButton)`
  margin-top: 0;
`;

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const commonExtra = useMemo(
    () => (
      <BaseRow gutter={[8, 8]}>
        <BaseCol span={24}>
          <BaseButton block type="primary" key="console">
            {t('results.goConsole')}
          </BaseButton>
        </BaseCol>

        <BaseCol span={24}>
          <BuyButton block key="buy">
            {t('results.buyAgain')}
          </BuyButton>
        </BaseCol>
      </BaseRow>
    ),
    [t]
  );

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <Card title={t('results.success')}>
          <BaseResult
            status="success"
            title={t('results.successTitle')}
            subTitle={t('results.successSubTitle')}
            extra={commonExtra}
          />
        </Card>
        <Card title={t('results.info')}>
          <BaseResult
            title={t('results.infoTitle')}
            extra={
              <BaseButton block type="primary" key="console">
                {t('results.goConsole')}
              </BaseButton>
            }
          />
        </Card>
        <Card title={t('results.warning')}>
          <BaseResult
            status="warning"
            title={t('results.warningTitle')}
            extra={
              <BaseButton block type="primary" key="console">
                {t('results.goConsole')}
              </BaseButton>
            }
          />
        </Card>
        <Card title={t('results.error')}>
          <BaseResult
            status="error"
            title={t('results.errorTitle')}
            subTitle={t('results.errorSubTitle')}
            extra={commonExtra}
          />
        </Card>
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
