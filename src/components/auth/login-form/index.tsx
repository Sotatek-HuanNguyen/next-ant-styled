import FacebookIcon from '@/assets/images/svg/icon-facebook.svg';
import GoogleIcon from '@/assets/images/svg/icon-google.svg';
import { BaseForm } from '@/components/common/forms/base-form';
import { useLoginMutate } from '@/hooks/features/useAuth';
import { useFeedback } from '@/hooks/useFeedback';
import * as Auth from '@/layouts/auth-layout/index.styles';
import { Form } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import * as S from './index.styles';

interface LoginFormData {
  email: string;
  password: string;
}

export const initValues: LoginFormData = {
  email: '',
  password: '',
};

export const LoginForm: React.FC = () => {
  const { t } = useTranslation(['auth', 'commons']);
  const [form] = Form.useForm();
  const { push } = useRouter();
  const { notification } = useFeedback();
  const { mutate, isPending } = useLoginMutate();

  const handleSubmit = (values: LoginFormData) => {
    mutate(values, {
      onSuccess(data) {
        console.log(data);
        push('/');
        notification.success({ message: 'Login success' });
      },
    });
  };

  return (
    <Auth.FormWrapper>
      <BaseForm
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark="optional"
        initialValues={initValues}
      >
        <Auth.FormTitle>{t('login', { ns: 'common' })}</Auth.FormTitle>
        <S.LoginDescription>{t('login.loginInfo')}</S.LoginDescription>
        <Auth.FormItem
          name="email"
          label={t('email', { ns: 'common' })}
          rules={[
            { required: true, message: t('validate.requiredField', { ns: 'common' }) },
            {
              type: 'email',
              message: t('validate.notValidEmail', { ns: 'common' }),
            },
          ]}
        >
          <Auth.FormInput placeholder={t('email', { ns: 'common' })} />
        </Auth.FormItem>
        <Auth.FormItem
          label={t('password', { ns: 'common' })}
          name="password"
          rules={[{ required: true, message: t('validate.requiredField', { ns: 'common' }) }]}
        >
          <Auth.FormInputPassword placeholder={t('password', { ns: 'common' })} />
        </Auth.FormItem>
        <Auth.ActionsWrapper>
          <BaseForm.Item name="rememberMe" valuePropName="checked" noStyle>
            <Auth.FormCheckbox>
              <S.RememberMeText>{t('login.rememberMe')}</S.RememberMeText>
            </Auth.FormCheckbox>
          </BaseForm.Item>
          <Link href="/auth/forgot-password">
            <S.ForgotPasswordText>{t('forgotPass', { ns: 'common' })}</S.ForgotPasswordText>
          </Link>
        </Auth.ActionsWrapper>
        <BaseForm.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit" loading={isPending}>
            {t('login', { ns: 'common' })}
          </Auth.SubmitButton>
        </BaseForm.Item>
        <BaseForm.Item noStyle>
          <Auth.SocialButton type="default" htmlType="submit">
            <Auth.SocialIconWrapper>
              <GoogleIcon />
            </Auth.SocialIconWrapper>
            {t('login.googleLink')}
          </Auth.SocialButton>
        </BaseForm.Item>
        <BaseForm.Item noStyle>
          <Auth.SocialButton type="default" htmlType="submit">
            <Auth.SocialIconWrapper>
              <FacebookIcon />
            </Auth.SocialIconWrapper>
            {t('login.facebookLink')}
          </Auth.SocialButton>
        </BaseForm.Item>
        <Auth.FooterWrapper>
          <Auth.Text>
            {t('login.noAccount')}{' '}
            <Link href="/auth/register">
              <Auth.LinkText>{t('here', { ns: 'common' })}</Auth.LinkText>
            </Link>
          </Auth.Text>
        </Auth.FooterWrapper>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
