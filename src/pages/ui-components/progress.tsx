import { BaseButton, ButtonGroup } from '@/components/common/base-button';
import { BaseCol } from '@/components/common/base-col';
import { BaseProgress } from '@/components/common/base-progress';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useMemo, useState } from 'react';
import { useTheme } from 'styled-components';

import * as S from './index.style';

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const [percent, setPercent] = useState<number>(0);
  const theme = useTheme();

  const dynamicSuccessColor = useMemo(
    () => (percent === 100 ? theme.success : theme.primary),
    [percent, theme]
  );

  const increase = () => {
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };

  const decrease = () => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('progress.basic')}>
          <BaseProgress percent={30} strokeColor={theme.primary} />
          <BaseProgress percent={50} status="active" strokeColor={theme.primary} />
          <BaseProgress percent={70} status="exception" strokeColor={theme.error} />
          <BaseProgress percent={100} strokeColor={theme.success} />
          <BaseProgress percent={50} showInfo={false} strokeColor={theme.primary} />
        </S.Card>
        <S.Card title={t('progress.circle')}>
          <BaseProgress type="circle" percent={75} strokeColor={theme.primary} />
          <BaseProgress type="circle" percent={70} status="exception" strokeColor={theme.error} />
          <BaseProgress type="circle" percent={100} strokeColor={theme.success} />
        </S.Card>
        <S.Card title={t('progress.dynamic')}>
          <div>
            <BaseProgress percent={percent} type="circle" strokeColor={dynamicSuccessColor} />
            <BaseProgress percent={percent} strokeColor={dynamicSuccessColor} />
            <ButtonGroup>
              <BaseButton onClick={decrease} icon={<MinusOutlined />} />
              <BaseButton onClick={increase} icon={<PlusOutlined />} />
            </ButtonGroup>
          </div>
        </S.Card>
        <S.Card title={t('progress.circle')}>
          <BaseProgress type="dashboard" percent={75} strokeColor={theme.primary} />
          <BaseProgress type="dashboard" percent={75} gapDegree={30} strokeColor={theme.primary} />
        </S.Card>
        <S.Card title={t('progress.gradient')}>
          <div>
            <BaseProgress
              strokeColor={{
                '0%': theme.primary,
                '100%': theme.secondary,
              }}
              percent={99.9}
            />
            <BaseProgress
              strokeColor={{
                from: theme.primary,
                to: theme.secondary,
              }}
              percent={99.9}
              status="active"
            />
            <BaseProgress
              type="circle"
              strokeColor={{
                '0%': theme.primary,
                '100%': theme.secondary,
              }}
              percent={90}
            />
            <BaseProgress
              type="circle"
              strokeColor={{
                '0%': theme.primary,
                '100%': theme.secondary,
              }}
              percent={100}
            />
          </div>
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
