import { BaseCol } from '@/components/common/base-col';
import { BaseDivider } from '@/components/common/base-divider';
import { BaseRadio } from '@/components/common/base-radio';
import { BaseSkeleton } from '@/components/common/base-skeleton';
import { BaseSpace } from '@/components/common/base-space';
import { BaseSwitch } from '@/components/common/base-switch';
import { BaseForm } from '@/components/common/forms/base-form';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';
import { styled } from 'styled-components';

import * as S from './index.style';

type Size = 'default' | 'large' | 'small';

const FormItem = styled(BaseForm.Item)`
  max-width: 100%;
`;

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const [state, setState] = useState<{
    active: boolean;
    block: boolean;
    size?: Size;
    buttonShape?: 'circle' | 'square' | 'round';
    avatarShape?: 'circle' | 'square';
  }>({
    active: false,
    block: false,
    size: 'default',
  });

  const handleActiveChange = (checked: boolean) => {
    setState({ ...state, active: checked });
  };

  const handleBlockChange = (checked: boolean) => {
    setState({ ...state, block: checked });
  };

  const handleSizeChange = (e: any) => {
    setState({ ...state, size: e.target.value as Size });
  };

  const handleShapeChange = (prop: string) => (e: any) => {
    setState({ ...state, [prop]: e.target.value });
  };

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('skeletons.basic')}>
          <BaseSkeleton />
        </S.Card>
        <S.Card title={t('skeletons.complex')}>
          <BaseSkeleton avatar paragraph={{ rows: 4 }} />
        </S.Card>
        <S.Card title={t('skeletons.active')}>
          <BaseSkeleton active />
        </S.Card>
        <S.Card title={t('skeletons.customization')}>
          <div>
            <BaseSpace wrap>
              <BaseSkeleton.Button
                active={state.active}
                size={state.size}
                shape={state.buttonShape}
                block={state.block}
              />
              <BaseSkeleton.Avatar
                active={state.active}
                size={state.size}
                shape={state.avatarShape}
              />
              <BaseSkeleton.Input style={{ width: 200 }} active={state.active} size={state.size} />
            </BaseSpace>
            <br />
            <br />
            <BaseSkeleton.Button
              active={state.active}
              size={state.size}
              shape={state.buttonShape}
              block={state.block}
            />
            <br />
            <br />
            <BaseSkeleton.Image />
            <BaseDivider />
            <BaseForm layout="inline">
              <FormItem label={t('skeletons.activeLabel')}>
                <BaseSwitch checked={state.active} onChange={handleActiveChange} />
              </FormItem>
              <FormItem label={t('skeletons.buttonBlock')}>
                <BaseSwitch checked={state.block} onChange={handleBlockChange} />
              </FormItem>
              <FormItem label={t('skeletons.size')}>
                <BaseRadio.Group value={state.size} onChange={handleSizeChange}>
                  <BaseRadio.Button value="default">{t('skeletons.default')}</BaseRadio.Button>
                  <BaseRadio.Button value="large">{t('skeletons.large')}</BaseRadio.Button>
                  <BaseRadio.Button value="small">{t('skeletons.small')}</BaseRadio.Button>
                </BaseRadio.Group>
              </FormItem>
              <FormItem label={t('skeletons.buttonShape')}>
                <BaseRadio.Group
                  value={state.buttonShape}
                  onChange={handleShapeChange('buttonShape')}
                >
                  <BaseRadio.Button value="default">{t('skeletons.default')}</BaseRadio.Button>
                  <BaseRadio.Button value="round">{t('skeletons.round')}</BaseRadio.Button>
                  <BaseRadio.Button value="circle">{t('skeletons.circle')}</BaseRadio.Button>
                </BaseRadio.Group>
              </FormItem>
              <FormItem label={t('skeletons.avatarShape')}>
                <BaseRadio.Group
                  value={state.avatarShape}
                  onChange={handleShapeChange('avatarShape')}
                >
                  <BaseRadio.Button value="square">{t('skeletons.square')}</BaseRadio.Button>
                  <BaseRadio.Button value="circle">{t('skeletons.circle')}</BaseRadio.Button>
                </BaseRadio.Group>
              </FormItem>
            </BaseForm>
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
