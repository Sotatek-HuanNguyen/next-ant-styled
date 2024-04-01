import { BaseRadio } from '@/components/common/base-radio';
import { BaseDatePicker } from '@/components/common/date-picker';
import { BaseForm } from '@/components/common/forms/base-form';
import { BaseInput } from '@/components/common/inputs/base-input';
import { BaseSelect, Option } from '@/components/common/selects/base-select';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import * as S from '../index.styles';

const Picker = styled(BaseDatePicker)`
  width: 100%;
`;

export const Step2: React.FC = () => {
  const { t } = useTranslation();

  const prefixSelector = (
    <BaseForm.Item name="prefix" noStyle>
      <S.Select>
        <Option value="375">+375</Option>
        <Option value="7">+7</Option>
      </S.Select>
    </BaseForm.Item>
  );

  return (
    <S.FormContent>
      <BaseForm.Item
        name="salutation"
        label={t('forms.stepFormLabels.salutation')}
        rules={[{ required: true, message: t('forms.stepFormLabels.salutationError') }]}
      >
        <BaseRadio.Group>
          <BaseRadio.Button value="mr">{t('forms.stepFormLabels.mr')}</BaseRadio.Button>
          <BaseRadio.Button value="mrs">{t('forms.stepFormLabels.mrs')}</BaseRadio.Button>
        </BaseRadio.Group>
      </BaseForm.Item>
      <BaseForm.Item
        name="gender"
        label={t('forms.stepFormLabels.gender')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <BaseSelect placeholder={t('forms.stepFormLabels.gender')}>
          <Option value="male">{t('forms.stepFormLabels.male')}</Option>
          <Option value="female">{t('forms.stepFormLabels.female')}</Option>
        </BaseSelect>
      </BaseForm.Item>
      <BaseForm.Item
        name="firstName"
        label={t('common.firstName')}
        rules={[{ required: true, message: t('forms.stepFormLabels.firstNameError') }]}
      >
        <BaseInput />
      </BaseForm.Item>
      <BaseForm.Item
        name="lastName"
        label={t('common.lastName')}
        rules={[{ required: true, message: t('forms.stepFormLabels.lastNameError') }]}
      >
        <BaseInput />
      </BaseForm.Item>
      <BaseForm.Item
        name="birthday"
        label={t('forms.stepFormLabels.birthday')}
        rules={[{ required: true, message: t('forms.stepFormLabels.birthdayError') }]}
      >
        <Picker format="YYYY-MM-DD" />
      </BaseForm.Item>
      <S.PhoneItem
        name="phone"
        label={t('common.phone')}
        rules={[{ required: true, message: t('forms.stepFormLabels.phoneError') }]}
      >
        <BaseInput addonBefore={prefixSelector} />
      </S.PhoneItem>
      <BaseForm.Item
        name="email"
        label={t('common.email')}
        rules={[
          {
            type: 'email',
            message: t('common.notValidEmail'),
          },
        ]}
      >
        <BaseInput />
      </BaseForm.Item>
    </S.FormContent>
  );
};
