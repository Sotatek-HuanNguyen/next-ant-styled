import { BaseForm } from '@/components/common/forms/base-form';
import { BaseInput } from '@/components/common/inputs/base-input';
import { InputPassword } from '@/components/common/inputs/password-input';
import { useTranslation } from 'next-i18next';
import React from 'react';

import * as S from '../index.styles';

export const Step1: React.FC = () => {
  const { t } = useTranslation();
  return (
    <S.FormContent>
      <BaseForm.Item
        name="login"
        label={t('forms.stepFormLabels.login')}
        rules={[{ required: true, message: t('forms.stepFormLabels.loginError') }]}
      >
        <BaseInput />
      </BaseForm.Item>
      <BaseForm.Item
        name="password"
        label={t('common.password')}
        rules={[{ required: true, message: t('forms.stepFormLabels.passwordError') }]}
      >
        <InputPassword />
      </BaseForm.Item>
      <BaseForm.Item
        name="confirmPassword"
        label={t('common.confirmPassword')}
        dependencies={['password']}
        rules={[
          { required: true, message: t('common.confirmPasswordError') },
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
        <InputPassword />
      </BaseForm.Item>
    </S.FormContent>
  );
};
