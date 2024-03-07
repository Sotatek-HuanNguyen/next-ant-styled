import { BaseForm } from '@/components/common/forms/base-form';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';

import * as S from './index.styles';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  termOfUse: true,
};

export const RegisterForm: React.FC = () => {
  const { t } = useTranslation(['auth', 'commons']);

  const handleSubmit = (values: SignUpFormData) => {
    // handle submit action here
    console.log(values);
  };

  return (
    <Auth.FormWrapper>
      <BaseForm
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark="optional"
        initialValues={initValues}
      >
        <S.Title>{t('register', { ns: 'common' })}</S.Title>
        <Auth.FormItem
          name="firstName"
          label={t('firstName', { ns: 'common' })}
          rules={[{ required: true, message: t('validate.requiredField') }]}
        >
          <Auth.FormInput placeholder={t('firstName', { ns: 'common' })} />
        </Auth.FormItem>
        <Auth.FormItem
          name="lastName"
          label={t('lastName', { ns: 'common' })}
          rules={[{ required: true, message: t('validate.requiredField') }]}
        >
          <Auth.FormInput placeholder={t('lastName', { ns: 'common' })} />
        </Auth.FormItem>
        <Auth.FormItem
          name="email"
          label={t('email', { ns: 'common' })}
          rules={[
            { required: true, message: t('validate.requiredField') },
            {
              type: 'email',
              message: t('validate.notValidEmail', { ns: 'common' }),
            },
          ]}
        >
          <Auth.FormInput placeholder={t('email')} />
        </Auth.FormItem>
        <Auth.FormItem
          label={t('password')}
          name="password"
          rules={[{ required: true, message: t('validate.requiredField') }]}
        >
          <Auth.FormInputPassword placeholder={t('password')} />
        </Auth.FormItem>
        <Auth.FormItem
          label={t('confirmPassword', { ns: 'common' })}
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: t('validate.requiredField') },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('validate.confirmPasswordError')));
              },
            }),
          ]}
        >
          <Auth.FormInputPassword placeholder={t('confirmPassword', { ns: 'common' })} />
        </Auth.FormItem>
        <Auth.ActionsWrapper>
          <BaseForm.Item name="termOfUse" valuePropName="checked" noStyle>
            <Auth.FormCheckbox>
              <Auth.Text>
                {t('register.agree', { ns: 'auth' })}{' '}
                <Link href="/" target="_blank">
                  <Auth.LinkText>{t('register.termOfUse', { ns: 'auth' })}</Auth.LinkText>
                </Link>{' '}
                {t('register.and')}{' '}
                <Link href="/" target="_blank">
                  <Auth.LinkText>{t('register.privacyOPolicy', { ns: 'auth' })}</Auth.LinkText>
                </Link>
              </Auth.Text>
            </Auth.FormCheckbox>
          </BaseForm.Item>
        </Auth.ActionsWrapper>
        <BaseForm.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit" loading={true}>
            {t('register', { ns: 'common' })}
          </Auth.SubmitButton>
        </BaseForm.Item>
        <Auth.FooterWrapper>
          <Auth.Text>
            {t('register.alreadyHaveAccount')}{' '}
            <Link href="/auth/login">
              <Auth.LinkText>{t('here', { ns: 'common' })}</Auth.LinkText>
            </Link>
          </Auth.Text>
        </Auth.FooterWrapper>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
