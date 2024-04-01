import { BaseModal } from '@/components/common/base-modal/BaseModal';
import { BaseForm } from '@/components/common/forms/base-form';
import { BaseInput } from '@/components/common/inputs/base-input';
import { InputNumber } from '@/components/common/inputs/number-input';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useResetFormOnCloseModal } from './useResetFormOnCloseModal';

interface AddUserFormModalProps {
  open: boolean;
  onCancel: () => void;
}

export const AddUserFormModal: React.FC<AddUserFormModalProps> = ({ open, onCancel }) => {
  const [form] = BaseForm.useForm();
  const { t } = useTranslation();

  useResetFormOnCloseModal({
    form,
    open,
  });

  const onOk = () => {
    form.submit();
  };

  return (
    <BaseModal
      title={t('forms.controlFormLabels.newUser')}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
    >
      <BaseForm form={form} layout="vertical" name="userForm">
        <BaseForm.Item
          name="name"
          label={t('common.name')}
          rules={[{ required: true, message: t('common.requiredField') }]}
        >
          <BaseInput />
        </BaseForm.Item>
        <BaseForm.Item
          name="age"
          label={t('common.age')}
          rules={[{ required: true, message: t('common.requiredField') }]}
        >
          <InputNumber block />
        </BaseForm.Item>
      </BaseForm>
    </BaseModal>
  );
};
