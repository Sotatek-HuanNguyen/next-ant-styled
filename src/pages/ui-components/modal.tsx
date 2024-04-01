import { BaseButton } from '@/components/common/base-button';
import { BaseCol } from '@/components/common/base-col';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE } from '@/constants';
import { useFeedback } from '@/hooks/useFeedback';
import AdminLayout from '@/layouts/admin-layout';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';

import * as S from './index.style';

const ExamplePage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const { modal } = useFeedback();
  const [isBasicModalOpen, setIsBasicModalOpen] = useState<boolean>(false);
  const [isSmallModalOpen, setIsSmallModalOpen] = useState<boolean>(false);
  const [isMiddleModalOpen, setIsMiddleModalOpen] = useState<boolean>(false);
  const [isLargeModalOpen, setIsLargeModalOpen] = useState<boolean>(false);
  const [isFullscreenModalOpen, setIsFullscreenModalOpen] = useState<boolean>(false);

  const success = () => {
    modal.success({
      title: t('modals.successTitle'),
      content: t('modals.someContent'),
    });
  };

  const info = () => {
    modal.info({
      title: t('modals.infoTitle'),
      content: t('modals.someContent'),
    });
  };

  const warning = () => {
    modal.warning({
      title: t('modals.warningTitle'),
      content: t('modals.someContent'),
    });
  };

  const error = () => {
    modal.error({
      title: t('modals.errorTitle'),
      content: t('modals.someContent'),
    });
  };

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('modals.basic')}>
          <BaseButton type="primary" onClick={() => setIsBasicModalOpen(true)}>
            {t('modals.open')}
          </BaseButton>
          <BaseModal
            title={t('modals.basic')}
            open={isBasicModalOpen}
            onOk={() => setIsBasicModalOpen(false)}
            onCancel={() => setIsBasicModalOpen(false)}
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </BaseModal>
        </S.Card>
        <S.Card title={t('modals.sizes')}>
          <BaseButton type="primary" onClick={() => setIsSmallModalOpen(true)}>
            {t('modals.small')}
          </BaseButton>
          <BaseButton type="primary" onClick={() => setIsMiddleModalOpen(true)}>
            {t('modals.middle')}
          </BaseButton>
          <BaseButton type="primary" onClick={() => setIsLargeModalOpen(true)}>
            {t('modals.large')}
          </BaseButton>
          <BaseButton type="primary" onClick={() => setIsFullscreenModalOpen(true)}>
            {t('modals.fullscreen')}
          </BaseButton>
          <BaseModal
            title={t('modals.smallTitle')}
            centered
            open={isSmallModalOpen}
            onOk={() => setIsSmallModalOpen(false)}
            onCancel={() => setIsSmallModalOpen(false)}
            size="small"
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </BaseModal>
          <BaseModal
            title={t('modals.middleTitle')}
            centered
            open={isMiddleModalOpen}
            onOk={() => setIsMiddleModalOpen(false)}
            onCancel={() => setIsMiddleModalOpen(false)}
            size="medium"
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </BaseModal>
          <BaseModal
            title={t('modals.largeTitle')}
            centered
            open={isLargeModalOpen}
            onOk={() => setIsLargeModalOpen(false)}
            onCancel={() => setIsLargeModalOpen(false)}
            size="large"
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </BaseModal>
          <BaseModal
            title={t('modals.fullscreenTitle')}
            centered
            open={isFullscreenModalOpen}
            onOk={() => setIsFullscreenModalOpen(false)}
            onCancel={() => setIsFullscreenModalOpen(false)}
            width="100%"
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </BaseModal>
        </S.Card>
        <S.Card title={t('modals.infoModal')}>
          <BaseButton severity="success" type="default" onClick={success}>
            {t('modals.success')}
          </BaseButton>
          <BaseButton severity="info" type="default" onClick={info}>
            {t('modals.info')}
          </BaseButton>
          <BaseButton severity="warning" type="default" onClick={warning}>
            {t('modals.warning')}
          </BaseButton>
          <BaseButton severity="error" type="default" onClick={error}>
            {t('modals.error')}
          </BaseButton>
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
