import { BaseForm } from '@/components/common/forms/base-form';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';

import * as S from './index.styles';

interface ForgotPasswordFormData {
  email: string;
}

const initValues = {
  email: '',
};

export const ForgotPasswordForm: React.FC = () => {
  const { t } = useTranslation(['auth', 'common']);
  const { back } = useRouter();

  const handleSubmit = (values: ForgotPasswordFormData) => {
    console.log('🚀 ~ handleSubmit ~ values:', values);
  };

  return (
    <Auth.FormWrapper>
      <BaseForm
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark="optional"
        initialValues={initValues}
      >
        <Auth.BackWrapper onClick={() => back()}>
          <Auth.BackIcon />
          {t('Back')}
        </Auth.BackWrapper>
        <Auth.FormTitle>{t('ResetPassword')}</Auth.FormTitle>
        <S.Description>{t('forgot.desc')}</S.Description>
        <Auth.FormItem
          name="email"
          label={t('Email')}
          rules={[{ required: true, message: t('common.emailError') }]}
        >
          <Auth.FormInput placeholder={t('common.email')} />
        </Auth.FormItem>
        <BaseForm.Item noStyle>
          <S.SubmitButton type="primary" htmlType="submit" loading={true}>
            {t('sendInstructions')}
          </S.SubmitButton>
        </BaseForm.Item>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
