import { BaseCol } from '@/components/common/base-col';
import { BaseCollapse } from '@/components/common/base-collapse/base-collapse';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useMemo } from 'react';

import * as S from './index.style';

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);

  const { items, nestedItems } = useMemo(() => {
    const items = [
      {
        label: `${t('dataDisplay.collapse.panelHeader')} 1`,
        key: 1,
        children: <p>{t('dataDisplay.collapse.text')}</p>,
      },
      {
        label: `${t('dataDisplay.collapse.panelHeader')} 2`,
        key: 2,
        children: <p>{t('dataDisplay.collapse.text')}</p>,
      },
      {
        label: `${t('dataDisplay.collapse.panelHeader')} 3`,
        key: 3,
        children: <p>{t('dataDisplay.collapse.text')}</p>,
      },
    ];
    return {
      items,
      nestedItems: [
        { ...items[0], children: <BaseCollapse defaultActiveKey="1" items={[items[0]]} /> },
        items[1],
        items[2],
      ],
    };
  }, [t]);

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('dataDisplay.collapse.basic')}>
          <S.CollapseWrapper defaultActiveKey={['1']} items={items} />
        </S.Card>
        <S.Card title={t('dataDisplay.collapse.accordion')}>
          <S.CollapseWrapper accordion defaultActiveKey={['2']} items={items} />
        </S.Card>
        <S.Card title={t('dataDisplay.collapse.nested')}>
          <S.CollapseWrapper defaultActiveKey="1" items={nestedItems} />
        </S.Card>
        <S.Card title={t('dataDisplay.collapse.ghost')}>
          <S.CollapseWrapper defaultActiveKey={['1']} ghost items={items} />
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
