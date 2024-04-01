import { BaseButton } from '@/components/common/base-button';
import { BaseCol } from '@/components/common/base-col';
import { BaseTooltip } from '@/components/common/base-tooltip';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { PoweroffOutlined, SearchOutlined } from '@ant-design/icons';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useState } from 'react';

import * as S from './index.style';

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const [loadings, setLoadings] = useState<boolean[]>([]);
  let timeout: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  const enterLoading = (index: number) => {
    setLoadings((loadings) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    timeout = setTimeout(() => {
      setLoadings((loadings) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('buttons.types')}>
          <BaseButton type="primary">{t('buttons.primary')}</BaseButton>
          <BaseButton type="default">{t('buttons.default')}</BaseButton>
          <BaseButton ghost>{t('buttons.ghost')}</BaseButton>
          <BaseButton type="dashed">{t('buttons.dashed')}</BaseButton>
          <BaseButton type="text">{t('buttons.text')}</BaseButton>
          <BaseButton type="link">{t('buttons.link')}</BaseButton>
        </S.Card>
        <S.Card title={t('buttons.severities')}>
          <BaseButton severity="info">{t('common.info')}</BaseButton>
          <BaseButton severity="success">{t('common.success')}</BaseButton>
          <BaseButton severity="warning">{t('common.warning')}</BaseButton>
          <BaseButton severity="error">{t('common.error')}</BaseButton>
        </S.Card>
        <S.Card title={t('buttons.sizes')}>
          <BaseButton ghost size="small">
            {t('buttons.small')}
          </BaseButton>
          <BaseButton ghost size="middle">
            {t('buttons.default')}
          </BaseButton>
          <BaseButton ghost size="large">
            {t('buttons.large')}
          </BaseButton>
        </S.Card>
        <S.Card title={t('buttons.loadings')}>
          <BaseButton type="primary" size="small" loading>
            {t('buttons.loading')}
          </BaseButton>
          <BaseButton type="primary" loading>
            {t('buttons.loading')}
          </BaseButton>
          <BaseButton type="primary" icon={<PoweroffOutlined />} loading />

          <BaseButton type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
            {t('buttons.click')}
          </BaseButton>
          <BaseButton
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[1]}
            onClick={() => enterLoading(1)}
          >
            {t('buttons.click')}
          </BaseButton>
          <BaseButton
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => enterLoading(2)}
          />
        </S.Card>
        <S.Card title={t('buttons.danger')}>
          <BaseButton type="primary" danger>
            {t('buttons.primary')}
          </BaseButton>
          <BaseButton type="default" danger>
            {t('buttons.default')}
          </BaseButton>
          <BaseButton type="dashed" danger>
            {t('buttons.dashed')}
          </BaseButton>
          <BaseButton type="text" danger>
            {t('buttons.text')}
          </BaseButton>
          <BaseButton type="link" danger>
            {t('buttons.link')}
          </BaseButton>
        </S.Card>
        <S.Card title={t('buttons.disabled')}>
          <BaseButton type="primary" disabled>
            {t('buttons.primary')}
          </BaseButton>
          <BaseButton type="default" disabled>
            {t('buttons.default')}
          </BaseButton>
          <BaseButton ghost disabled>
            {t('buttons.ghost')}
          </BaseButton>
          <BaseButton type="dashed" disabled>
            {t('buttons.dashed')}
          </BaseButton>
          <BaseButton type="text" disabled>
            {t('buttons.text')}
          </BaseButton>
          <BaseButton type="link" disabled>
            {t('buttons.link')}
          </BaseButton>
        </S.Card>
        <S.Card title={t('buttons.icons')}>
          <BaseTooltip title={t('buttons.search')}>
            <BaseButton type="primary" shape="circle" icon={<SearchOutlined />} />
          </BaseTooltip>
          <BaseTooltip title={t('buttons.search')}>
            <BaseButton type="primary" shape="circle">
              A
            </BaseButton>
          </BaseTooltip>
          <BaseTooltip title={t('buttons.search')}>
            <BaseButton type="primary" icon={<SearchOutlined />}>
              {t('buttons.search')}
            </BaseButton>
          </BaseTooltip>

          <BaseTooltip title={t('buttons.search')}>
            <BaseButton type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
          </BaseTooltip>
          <BaseTooltip title={t('buttons.search')}>
            <BaseButton type="dashed" icon={<SearchOutlined />} size="large">
              {t('buttons.search')}
            </BaseButton>
          </BaseTooltip>
          <BaseTooltip title={t('buttons.search')}>
            <BaseButton ghost icon={<SearchOutlined />} size="large" />
          </BaseTooltip>
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
