import { BaseButton } from '@/components/common/base-button';
import { BaseCol } from '@/components/common/base-col';
import { BaseSpace } from '@/components/common/base-space';
import { BaseSwitch } from '@/components/common/base-switch';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';

import * as S from './index.style';

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('switches.basic')}>
          <BaseSwitch defaultChecked />
        </S.Card>
        <S.Card title={t('switches.disabled')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseSwitch disabled={disabled} defaultChecked />
            <BaseButton type="primary" onClick={() => setDisabled(!disabled)}>
              {t('switches.toggleDisabled')}
            </BaseButton>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('switches.sizes')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseSwitch defaultChecked />
            <BaseSwitch size="small" defaultChecked />
          </BaseSpace>
        </S.Card>
        <S.Card title={t('switches.loading')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseSwitch loading defaultChecked />
            <BaseSwitch size="small" loading />
          </BaseSpace>
        </S.Card>
        <S.Card title={t('switches.icons')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseSwitch
              checkedChildren={t('switches.yes')}
              unCheckedChildren={t('switches.no')}
              defaultChecked
            />
            <BaseSwitch checkedChildren="1" unCheckedChildren="0" />
            <BaseSwitch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
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
