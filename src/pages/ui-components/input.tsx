import { BaseCascader } from '@/components/common/base-cascader';
import { BaseCol } from '@/components/common/base-col';
import { BaseTooltip } from '@/components/common/base-tooltip';
import { BaseInput } from '@/components/common/inputs/base-input';
import { ClipboardInput } from '@/components/common/inputs/clipboard-input';
import { OpenURLInput } from '@/components/common/inputs/openurl-input/OpenURLInput';
import { InputPassword } from '@/components/common/inputs/password-input';
import { SearchInput } from '@/components/common/inputs/search-input';
import { BaseSelect, Option } from '@/components/common/selects/base-select';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import {
  AudioOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';

import * as S from './index.style';

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const [clipboardValue, setClipboardValue] = useState('@haky');
  const [newTabValue, setNewTabValue] = useState('http://haky.com');

  const selectBefore = (
    <BaseSelect defaultValue="http://">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </BaseSelect>
  );

  const selectAfter = (
    <BaseSelect defaultValue=".com">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </BaseSelect>
  );

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('inputs.basic')}>
          <S.InputsWrapper>
            <BaseInput placeholder={t('inputs.basic')} />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.sizes')}>
          <S.InputsWrapper>
            <BaseInput size="small" placeholder={t('inputs.small')} prefix={<UserOutlined />} />
            <BaseInput placeholder={t('inputs.default')} prefix={<UserOutlined />} />
            <BaseInput size="large" placeholder={t('inputs.large')} prefix={<UserOutlined />} />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.prePost')}>
          <S.InputsWrapper>
            <BaseInput addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
            <BaseInput addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
            <BaseInput addonAfter={<SettingOutlined />} defaultValue="mysite" />
            <BaseInput addonBefore="http://" suffix=".com" defaultValue="mysite" />
            <BaseInput
              addonBefore={<BaseCascader placeholder="cascader" />}
              defaultValue="mysite"
            />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.prefixSuffix')}>
          <S.InputsWrapper>
            <BaseInput
              placeholder={t('inputs.enterName')}
              prefix={<UserOutlined />}
              suffix={
                <BaseTooltip title={t('inputs.extra')}>
                  <InfoCircleOutlined />
                </BaseTooltip>
              }
            />
            <BaseInput prefix="￥" suffix="RMB" />
            <BaseInput prefix="￥" suffix="RMB" disabled />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.search')}>
          <S.InputsWrapper>
            <SearchInput placeholder={t('inputs.searchText')} allowClear />
            <SearchInput addonBefore="https://" placeholder={t('inputs.searchText')} allowClear />
            <SearchInput
              placeholder={t('inputs.searchText')}
              enterButton="Search"
              size="large"
              suffix={<AudioOutlined />}
            />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.password')}>
          <S.InputsWrapper>
            <InputPassword
              placeholder={t('inputs.passwordText')}
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.textarea')}>
          <S.InputsWrapper>
            <BaseInput.TextArea rows={4} />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.func')}>
          <S.InputsWrapper>
            <ClipboardInput
              value={clipboardValue}
              placeholder={t('inputs.clipboard')}
              valueToCopy={clipboardValue}
              onChange={(e) => setClipboardValue(e.target.value)}
            />
            <OpenURLInput
              value={newTabValue}
              placeholder={t('inputs.openURL')}
              href={newTabValue}
              onChange={(e) => setNewTabValue(e.target.value)}
            />
          </S.InputsWrapper>
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
