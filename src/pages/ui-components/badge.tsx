import { BaseAvatar } from '@/components/common/base-avatar';
import { BaseBadge } from '@/components/common/base-badge';
import { BaseCard } from '@/components/common/base-card';
import { BaseCol } from '@/components/common/base-col';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import * as S from './index.style';

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('dataDisplay.badges.sizes')}>
          <BaseBadge size="default" count={5}>
            <BaseAvatar shape="square" size="large" />
          </BaseBadge>
          <BaseBadge size="small" count={5}>
            <BaseAvatar shape="square" size="large" />
          </BaseBadge>
        </S.Card>
        <S.Card title={t('dataDisplay.badges.overflow')}>
          <BaseBadge count={99}>
            <BaseAvatar shape="square" size="large" />
          </BaseBadge>
          <BaseBadge count={100}>
            <BaseAvatar shape="square" size="large" />
          </BaseBadge>
          <BaseBadge count={99} overflowCount={10}>
            <BaseAvatar shape="square" size="large" />
          </BaseBadge>
          <BaseBadge count={1000} overflowCount={999}>
            <BaseAvatar shape="square" size="large" />
          </BaseBadge>
        </S.Card>
        <S.Card title={t('dataDisplay.badges.status')}>
          <BaseBadge status="success" />
          <BaseBadge status="error" />
          <BaseBadge status="default" />
          <BaseBadge status="processing" />
          <BaseBadge status="warning" />
          <br />
          <BaseBadge status="success" text={t('dataDisplay.badges.success')} />
          <br />
          <BaseBadge status="error" text={t('dataDisplay.badges.error')} />
          <br />
          <BaseBadge status="default" text={t('dataDisplay.badges.default')} />
          <br />
          <BaseBadge status="processing" text={t('dataDisplay.badges.processing')} />
          <br />
          <BaseBadge status="warning" text={t('dataDisplay.badges.warning')} />
        </S.Card>
        <S.Card title={t('dataDisplay.badges.ribbon')}>
          <BaseCol span={24}>
            <BaseBadge.Ribbon text={t('dataDisplay.badges.hippies')}>
              <BaseCard title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </BaseCard>
            </BaseBadge.Ribbon>
          </BaseCol>
          <BaseCol span={24}>
            <BaseBadge.Ribbon text={t('dataDisplay.badges.hippies')} color="pink">
              <BaseCard title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </BaseCard>
            </BaseBadge.Ribbon>
          </BaseCol>
          <BaseCol span={24}>
            <BaseBadge.Ribbon text={t('dataDisplay.badges.hippies')} color="red">
              <BaseCard title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </BaseCard>
            </BaseBadge.Ribbon>
          </BaseCol>
          <BaseCol span={24}>
            <BaseBadge.Ribbon text={t('dataDisplay.badges.hippies')} color="cyan">
              <BaseCard title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </BaseCard>
            </BaseBadge.Ribbon>
          </BaseCol>
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
