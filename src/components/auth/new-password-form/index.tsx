import { BaseForm } from '@/components/common/forms/base-form';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './index.styles';

interface NewPasswordFormData {
  password: string;
  confirmPassword: string;
}

const initStates = {
  password: 'new-password',
  confirmPassword: 'new-password',
};

export const NewPasswordForm: React.FC = () => {
  const { t } = useTranslation(['auth', 'common']);
  const router = useRouter();

  const handleSubmit = (values: NewPasswordFormData) => {
    //  mutate here
    console.log('🚀 ~ handleSubmit ~ values:', values);
  };

  return (
    <Auth.FormWrapper>
      <BaseForm
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark="optional"
        initialValues={initStates}
      >
        <Auth.BackWrapper onClick={() => router.back()}>
          <Auth.BackIcon />
          {t('auth.back')}
        </Auth.BackWrapper>
        <Auth.FormTitle>{t('newPass.title')}</Auth.FormTitle>
        <S.Description>{t('newPass.desc')}</S.Description>
        <Auth.FormItem
          name="password"
          label={t('common.password')}
          rules={[{ required: true, message: t('common.requiredField') }]}
        >
          <Auth.FormInputPassword placeholder={t('common.password')} />
        </Auth.FormItem>
        <Auth.FormItem
          name="confirmPassword"
          label={t('common.confirmPassword')}
          dependencies={['password']}
          rules={[
            { required: true, message: t('common.requiredField') },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('common.confirmPasswordError')));
              },
            }),
          ]}
        >
          <Auth.FormInputPassword placeholder={t('common.confirmPassword')} />
        </Auth.FormItem>
        <BaseForm.Item noStyle>
          <S.SubmitButton type="primary" htmlType="submit" loading={true}>
            {t('newPass.resetPassword')}
          </S.SubmitButton>
        </BaseForm.Item>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
