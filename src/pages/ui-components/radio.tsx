import { BaseButton } from '@/components/common/base-button';
import { BaseCol } from '@/components/common/base-col';
import { BaseRadio } from '@/components/common/base-radio';
import { BaseSpace } from '@/components/common/base-space';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';

import * as S from './index.style';

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const [value, setValue] = useState<number>(1);
  const [disabled, setDisabled] = useState<boolean>(false);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('radios.basic')}>
          <BaseRadio>{t('radios.radio')}</BaseRadio>
        </S.Card>
        <S.Card title={t('radios.disabledRadio')}>
          <BaseSpace direction="vertical" size={20}>
            <div>
              <BaseRadio defaultChecked={false} disabled={disabled}>
                {t('radios.disabled')}
              </BaseRadio>
              <BaseRadio defaultChecked disabled={disabled}>
                {t('radios.disabled')}
              </BaseRadio>
            </div>
            <BaseButton type="primary" onClick={() => toggleDisabled()}>
              {t('radios.toggleDisabled')}
            </BaseButton>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('radios.radioGroup')}>
          <BaseRadio.Group onChange={(event) => setValue(event.target.value)} value={value}>
            <BaseRadio value={1}>{t('radios.a')}</BaseRadio>
            <BaseRadio value={2}>{t('radios.b')}</BaseRadio>
            <BaseRadio value={3}>{t('radios.c')}</BaseRadio>
            <BaseRadio value={4}>{t('radios.d')}</BaseRadio>
          </BaseRadio.Group>
        </S.Card>
        <S.Card title={t('radios.radioButton')}>
          <BaseSpace direction="vertical" size={20}>
            <BaseRadio.Group defaultValue="a">
              <BaseRadio.Button value="a">Haky 1</BaseRadio.Button>
              <BaseRadio.Button value="b">Haky 2</BaseRadio.Button>
              <BaseRadio.Button value="c">Haky 3</BaseRadio.Button>
              <BaseRadio.Button value="d">Haky 4</BaseRadio.Button>
            </BaseRadio.Group>
            <BaseRadio.Group
              disabled
              onChange={(event) => setValue(event.target.value)}
              defaultValue="a"
            >
              <BaseRadio.Button value="a">Haky 1</BaseRadio.Button>
              <BaseRadio.Button value="b">Haky 2</BaseRadio.Button>
              <BaseRadio.Button value="c">Haky 3</BaseRadio.Button>
              <BaseRadio.Button value="d">Haky 4</BaseRadio.Button>
            </BaseRadio.Group>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('radios.radioButtonSizes')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseRadio.Group size="small" defaultValue="a">
              <BaseRadio.Button value="a">Haky 1</BaseRadio.Button>
              <BaseRadio.Button value="b">Haky 2</BaseRadio.Button>
              <BaseRadio.Button value="c">Haky 3</BaseRadio.Button>
              <BaseRadio.Button value="d">Haky 4</BaseRadio.Button>
            </BaseRadio.Group>
            <BaseRadio.Group defaultValue="a">
              <BaseRadio.Button value="a">Haky 1</BaseRadio.Button>
              <BaseRadio.Button value="b">Haky 2</BaseRadio.Button>
              <BaseRadio.Button value="c">Haky 3</BaseRadio.Button>
              <BaseRadio.Button value="d">Haky 4</BaseRadio.Button>
            </BaseRadio.Group>
            <BaseRadio.Group size="large" defaultValue="a">
              <BaseRadio.Button value="a">Haky 1</BaseRadio.Button>
              <BaseRadio.Button value="b">Haky 2</BaseRadio.Button>
              <BaseRadio.Button value="c">Haky 3</BaseRadio.Button>
              <BaseRadio.Button value="d">Haky 4</BaseRadio.Button>
            </BaseRadio.Group>
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
