import { BaseButton } from '@/components/common/base-button';
import { BaseCheckbox } from '@/components/common/base-checkbox';
import { BaseCol } from '@/components/common/base-col';
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
  const [checked, setChecked] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const label = `${checked ? t('checkboxes.checked') : t('checkboxes.unchecked')}-${
    disabled ? t('checkboxes.disabled') : t('checkboxes.enabled')
  }`;
  const groupOptions = [t('checkboxes.apple'), t('checkboxes.pear'), t('checkboxes.orange')];

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('checkboxes.basic')}>
          <BaseCheckbox>{t('checkboxes.checkbox')}</BaseCheckbox>
        </S.Card>
        <S.Card title={t('checkboxes.disabledCheckbox')}>
          <BaseCheckbox defaultChecked={false} disabled />
          <BaseCheckbox defaultChecked disabled />
        </S.Card>
        <S.Card title={t('checkboxes.controlled')}>
          <BaseSpace direction="vertical" size={20}>
            <BaseCheckbox
              checked={checked}
              disabled={disabled}
              onChange={(event) => setChecked(event.target.checked)}
            >
              {label}
            </BaseCheckbox>
            <BaseSpace>
              <BaseButton type="primary" size="small" onClick={() => setChecked(!checked)}>
                {!checked ? t('checkboxes.check') : t('checkboxes.uncheck')}
              </BaseButton>
              <BaseButton type="primary" size="small" onClick={() => setDisabled(!disabled)}>
                {!disabled ? t('checkboxes.disable') : t('checkboxes.enable')}
              </BaseButton>
            </BaseSpace>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('checkboxes.group')}>
          <BaseCheckbox.Group options={groupOptions} defaultValue={[`${t('checkboxes.apple')}`]} />
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
