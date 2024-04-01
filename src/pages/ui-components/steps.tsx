import { BaseCol } from '@/components/common/base-col';
import { BaseSpace } from '@/components/common/base-space';
import { BaseSteps } from '@/components/common/base-steps';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';

import * as S from './index.style';

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const [current, setCurrent] = useState<number>(0);

  const onChange = (current: number) => {
    setCurrent(current);
  };

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('steps.basic')}>
          <BaseSteps
            current={1}
            items={[
              {
                title: t('steps.finished'),
                description: t('steps.description'),
              },
              {
                title: t('steps.inProgress'),
                subTitle: 'Left 00:00:08',
                description: t('steps.description'),
              },
              {
                title: t('steps.waiting'),
                description: t('steps.description'),
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('steps.small')}>
          <BaseSteps
            size="small"
            current={1}
            items={[
              {
                title: t('steps.finished'),
              },
              {
                title: t('steps.inProgress'),
              },
              {
                title: t('steps.waiting'),
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('steps.icons')}>
          <BaseSteps
            items={[
              {
                title: t('steps.login'),
                icon: <UserOutlined />,
              },
              {
                title: t('steps.verification'),
                icon: <SolutionOutlined />,
              },
              {
                title: t('steps.pay'),
                icon: <LoadingOutlined />,
              },
              {
                title: t('steps.done'),
                icon: <SmileOutlined />,
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('steps.vertical')}>
          <BaseSteps
            direction="vertical"
            size="small"
            current={1}
            items={[
              {
                title: t('steps.finished'),
                description: t('steps.description'),
              },
              {
                title: t('steps.inProgress'),
                description: t('steps.description'),
              },
              {
                title: t('steps.waiting'),
                description: t('steps.description'),
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('steps.clickable')}>
          <BaseSpace direction="vertical" size={20}>
            <BaseSteps
              current={current}
              onChange={onChange}
              items={[
                {
                  title: t('steps.step', { number: 1 }),
                  description: t('steps.description'),
                },
                {
                  title: t('steps.step', { number: 2 }),
                  description: t('steps.description'),
                },
                {
                  title: t('steps.step', { number: 3 }),
                  description: t('steps.description'),
                },
              ]}
            />
            <BaseSteps
              current={current}
              onChange={onChange}
              direction="vertical"
              items={[
                {
                  title: t('steps.step', { number: 1 }),
                  description: t('steps.description'),
                },
                {
                  title: t('steps.step', { number: 2 }),
                  description: t('steps.description'),
                },
                {
                  title: t('steps.step', { number: 3 }),
                  description: t('steps.description'),
                },
              ]}
            />
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
