import { BaseCol } from '@/components/common/base-col';
import { BaseRadio } from '@/components/common/base-radio';
import { BaseSpace } from '@/components/common/base-space';
import { BaseTag } from '@/components/common/base-tag';
import { BaseSelect, Option } from '@/components/common/selects/base-select';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';

import * as S from './index.style';

type Size = 'small' | 'middle' | 'large';

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const [size, setSize] = useState<Size>('middle');
  const options = [
    { value: t('selects.gold') },
    { value: t('selects.lime') },
    { value: t('selects.green') },
    { value: t('selects.cyan') },
  ];
  const children: React.ReactNode[] = [];

  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i} value={i.toString(36) + i}>
        {i.toString(36) + i}
      </Option>
    );
  }

  const tagRender = (props: {
    label: string | React.ReactNode;
    value: any;
    closable: boolean;
    onClose: () => void;
  }) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <BaseTag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </BaseTag>
    );
  };

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('selects.basic')}>
          <BaseSelect defaultValue="lucy" width={120}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              {t('selects.disabled')}
            </Option>
            <Option value="Yiminghe">Yiminghe</Option>
          </BaseSelect>
          <BaseSelect defaultValue="lucy" width={120} disabled>
            <Option value="lucy">Lucy</Option>
          </BaseSelect>
          <BaseSelect defaultValue="lucy" width={120} loading>
            <Option value="lucy">Lucy</Option>
          </BaseSelect>
          <BaseSelect defaultValue="lucy" width={120} allowClear>
            <Option value="lucy">Lucy</Option>
          </BaseSelect>
        </S.Card>
        <S.Card title={t('selects.multipleSelect')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseSelect
              mode="multiple"
              allowClear
              width="100%"
              suffixIcon={null}
              placeholder={t('selects.pleaseSelect')}
              defaultValue={['a10', 'c12']}
            >
              {children}
            </BaseSelect>
            <BaseSelect
              mode="multiple"
              disabled
              suffixIcon={null}
              placeholder={t('selects.pleaseSelect')}
              defaultValue={['a10', 'c12']}
            >
              {children}
            </BaseSelect>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('selects.selectSizes')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseRadio.Group value={size} onChange={(event) => setSize(event.target.value)}>
              <BaseRadio.Button value="small">{t('selects.small')}</BaseRadio.Button>
              <BaseRadio.Button value="middle">{t('selects.middle')}</BaseRadio.Button>
              <BaseRadio.Button value="large">{t('selects.large')}</BaseRadio.Button>
            </BaseRadio.Group>
            <BaseSelect size={size} defaultValue="a1" width={200}>
              {children}
            </BaseSelect>
            <BaseSelect
              mode="multiple"
              size={size}
              placeholder={t('selects.pleaseSelect')}
              defaultValue={['a10', 'c12']}
              width="100%"
            >
              {children}
            </BaseSelect>
            <BaseSelect
              mode="tags"
              size={size}
              placeholder={t('selects.pleaseSelect')}
              defaultValue={['a10', 'c12']}
              width="100%"
            >
              {children}
            </BaseSelect>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('selects.customTags')}>
          <BaseSelect
            mode="multiple"
            tagRender={tagRender}
            defaultValue={['gold', 'cyan']}
            width="100%"
            options={options}
          />
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
