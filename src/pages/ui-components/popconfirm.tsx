import { BaseButton } from '@/components/common/base-button';
import { BaseCol } from '@/components/common/base-col';
import { BasePopconfirm } from '@/components/common/base-popconfirm';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE, FONT_SIZE } from '@/constants';
import { useFeedback } from '@/hooks/useFeedback';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';
import { styled } from 'styled-components';

import * as S from './index.style';
import { BottomButtons, LeftButtons, RightButtons, TopButtons } from './popover';

const AsyncButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
`;

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);

  const { notification } = useFeedback();
  const [open, setOpen] = useState<boolean>(false);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

  const text = t('popconfirm.content');

  const confirm = () => {
    notification.info({ message: t('popconfirm.yesClick') });
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('popconfirm.basic')}>
          <BasePopconfirm title={text}>
            <BaseButton type="primary">{t('popconfirm.delete')}</BaseButton>
          </BasePopconfirm>
        </S.Card>
        <S.Card title={t('popconfirm.positions')}>
          <div>
            <TopButtons>
              <BasePopconfirm
                placement="topLeft"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.tl')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="top"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.top')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="topRight"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.tr')}</BaseButton>
              </BasePopconfirm>
            </TopButtons>
            <LeftButtons>
              <BasePopconfirm
                placement="leftTop"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.lt')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="left"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.left')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="leftBottom"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.lb')}</BaseButton>
              </BasePopconfirm>
            </LeftButtons>
            <RightButtons>
              <BasePopconfirm
                placement="rightTop"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.rt')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="right"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.right')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="rightBottom"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.rb')}</BaseButton>
              </BasePopconfirm>
            </RightButtons>
            <BottomButtons>
              <BasePopconfirm
                placement="bottomLeft"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.bl')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="bottom"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.bottom')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="bottomRight"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.br')}</BaseButton>
              </BasePopconfirm>
            </BottomButtons>
          </div>
        </S.Card>
        <S.Card title={t('popconfirm.async')}>
          <BasePopconfirm
            title={t('popovers.title')}
            open={open}
            onConfirm={handleOk}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={() => setOpen(false)}
          >
            <AsyncButton type="primary" onClick={() => setOpen(true)}>
              {t('popconfirm.openAsync')}
            </AsyncButton>
          </BasePopconfirm>
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
