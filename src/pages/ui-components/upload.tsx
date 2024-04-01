import { BaseButton } from '@/components/common/base-button';
import { BaseCol } from '@/components/common/base-col';
import { BaseUpload } from '@/components/common/base-upload';
import SeoHead from '@/components/common/seo-header';
import { DEFAULT_LOCALE, FONT_SIZE, FONT_WEIGHT } from '@/constants';
import { useFeedback } from '@/hooks/useFeedback';
import AdminLayout from '@/layouts/admin-layout';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { styled } from 'styled-components';

import * as S from './index.style';

const DraggerIconWrapper = styled.div`
  font-size: 4rem;
  color: ${({ theme }) => theme.primary};
`;

const DraggerTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes?.xl};
  font-weight: ${FONT_WEIGHT.bold};
`;

const DraggerDescription = styled.div`
  font-size: ${FONT_SIZE.md};
  padding: 0 1rem;
`;

const UploadPage = () => {
  const { t } = useTranslation(['forms', 'common']);
  const { notification } = useFeedback();

  const uploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: (info: any) => {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        notification.success({ message: t('uploads.successUpload', { name: info.file.name }) });
      } else if (status === 'error') {
        notification.error({ message: t('uploads.failedUpload', { name: info.file.name }) });
      }
    },
  };

  return (
    <>
      <SeoHead title="UI Components" />
      <BaseCol>
        <S.Card title={t('uploads.basic')}>
          <BaseUpload {...uploadProps}>
            <BaseButton icon={<UploadOutlined />}>{t('uploads.clickToUpload')}</BaseButton>
          </BaseUpload>
        </S.Card>
        <S.Card title={t('uploads.directory')}>
          <BaseUpload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
            <BaseButton icon={<UploadOutlined />}>{t('uploads.directory')}</BaseButton>
          </BaseUpload>
        </S.Card>
        <S.Card title={t('uploads.dragger')}>
          <BaseUpload.Dragger {...uploadProps}>
            <DraggerIconWrapper>
              <InboxOutlined />
            </DraggerIconWrapper>
            <DraggerTitle>{t('uploads.dragUpload')}</DraggerTitle>
            <DraggerDescription>{t('uploads.bulkUpload')}</DraggerDescription>
          </BaseUpload.Dragger>
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

UploadPage.layout = AdminLayout;

export default UploadPage;
