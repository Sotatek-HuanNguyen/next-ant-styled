import { BaseButton } from '@/components/common/base-button';
import { BaseCol } from '@/components/common/base-col';
import { BasePopover } from '@/components/common/base-popover';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { styled } from 'styled-components';

import * as S from './index.style';

const buttonWidth = 70;

export const PopoverButton = styled.div`
  display: flex;
  gap: 5px;
`;

export const TopButtons = styled(PopoverButton)`
  white-space: nowrap;
  margin-left: ${buttonWidth + 18}px;
`;
export const LeftButtons = styled(PopoverButton)`
  flex-direction: column;
  width: ${buttonWidth}px;
  float: left;
`;

export const RightButtons = styled(PopoverButton)`
  flex-direction: column;
  width: ${buttonWidth}px;
  margin-left: ${buttonWidth * 4}px;
`;

export const BottomButtons = styled(PopoverButton)`
  margin-left: ${buttonWidth}px;
  clear: both;
  white-space: nowrap;
  margin-left: ${buttonWidth}px;
`;

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);

  const title = <span>{t('popovers.title')}</span>;
  const content = (
    <div>
      <p>{t('popovers.content')}</p>
      <p>{t('popovers.content')}</p>
    </div>
  );

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('popovers.basic')}>
          <BasePopover content={content} title={title}>
            <BaseButton type="primary">{t('popovers.hover')}</BaseButton>
          </BasePopover>
        </S.Card>
        <S.Card title={t('popovers.positions')}>
          <div>
            <TopButtons>
              <BasePopover placement="topLeft" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.tl')}</BaseButton>
              </BasePopover>
              <BasePopover placement="top" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.top')}</BaseButton>
              </BasePopover>
              <BasePopover placement="topRight" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.tr')}</BaseButton>
              </BasePopover>
            </TopButtons>
            <LeftButtons>
              <BasePopover placement="leftTop" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.lt')}</BaseButton>
              </BasePopover>
              <BasePopover placement="left" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.left')}</BaseButton>
              </BasePopover>
              <BasePopover placement="leftBottom" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.lb')}</BaseButton>
              </BasePopover>
            </LeftButtons>
            <RightButtons>
              <BasePopover placement="rightTop" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.rt')}</BaseButton>
              </BasePopover>
              <BasePopover placement="right" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.right')}</BaseButton>
              </BasePopover>
              <BasePopover placement="rightBottom" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.rb')}</BaseButton>
              </BasePopover>
            </RightButtons>
            <BottomButtons>
              <BasePopover placement="bottomLeft" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.bl')}</BaseButton>
              </BasePopover>
              <BasePopover placement="bottom" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.bottom')}</BaseButton>
              </BasePopover>
              <BasePopover placement="bottomRight" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.br')}</BaseButton>
              </BasePopover>
            </BottomButtons>
          </div>
        </S.Card>
        <S.Card title={t('popovers.triggers')}>
          <BasePopover content={content} title={title} trigger="hover">
            <BaseButton>{t('popovers.hover')}</BaseButton>
          </BasePopover>
          <BasePopover content={content} title={title} trigger="focus">
            <BaseButton>{t('popovers.focus')}</BaseButton>
          </BasePopover>
          <BasePopover content={content} title={title} trigger="click">
            <BaseButton>{t('popovers.click')}</BaseButton>
          </BasePopover>
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
