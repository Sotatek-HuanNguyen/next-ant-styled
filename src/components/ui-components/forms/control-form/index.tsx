import { BaseAvatar } from '@/components/common/base-avatar';
import { BaseButton } from '@/components/common/base-button';
import { BaseButtonsForm } from '@/components/common/forms/base-buttons-form';
import { BaseInput } from '@/components/common/inputs/base-input';
import { useFeedback } from '@/hooks/useFeedback';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';

import { AddUserFormModal } from './AddUserFormModal';
import * as S from './index.styles';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

interface UserType {
  name: string;
  age: string;
}

export const ControlForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation('forms');
  const { notification } = useFeedback();

  const showUserModal = () => {
    setOpen(true);
  };

  const hideUserModal = () => {
    setOpen(false);
  };

  const onFinish = (values = {}) => {
    setLoading(true);
    setTimeout(() => {
      setFieldsChanged(false);
      setLoading(false);
      notification.success({ message: t('common.success') });
      console.log(values);
    }, 1000);
  };

  return (
    <BaseButtonsForm.Provider
      onFormFinish={(name, { values, forms }) => {
        if (name === 'userForm') {
          const { controlForm } = forms;
          const users = controlForm.getFieldValue('users') || [];
          controlForm.setFieldsValue({ users: [...users, values] });
          setOpen(false);
        }
      }}
    >
      <BaseButtonsForm
        {...layout}
        name="controlForm"
        isFieldsChanged={isFieldsChanged}
        footer={
          <BaseButtonsForm.Item>
            <BaseButton htmlType="submit" type="primary" loading={isLoading}>
              {t('Submit')}
            </BaseButton>
            <S.AddUserButton type="default" htmlType="button" onClick={showUserModal}>
              {t('Aad User')}
            </S.AddUserButton>
          </BaseButtonsForm.Item>
        }
        onFinish={onFinish}
        onFieldsChange={() => setFieldsChanged(true)}
      >
        <BaseButtonsForm.Item
          name="group"
          label={t('Group Name')}
          rules={[{ required: true, message: t('forms.controlFormLabels.groupNameError') }]}
        >
          <BaseInput />
        </BaseButtonsForm.Item>
        <S.UserList
          label={t('User lsist')}
          shouldUpdate={(prevValues: any, curValues: any) => prevValues.users !== curValues.users}
        >
          {({ getFieldValue }: any) => {
            const users: UserType[] = getFieldValue('users') || [];
            return users.length ? (
              <S.List>
                {users.map((user, index) => (
                  <S.ListItem key={index}>
                    <BaseAvatar icon={<UserOutlined />} />
                    <S.User>
                      {user.name} - {user.age}
                    </S.User>
                  </S.ListItem>
                ))}
              </S.List>
            ) : (
              <S.Text>
                ( <SmileOutlined /> {t('No user yet.')} )
              </S.Text>
            );
          }}
        </S.UserList>
      </BaseButtonsForm>
      <AddUserFormModal open={open} onCancel={hideUserModal} />
    </BaseButtonsForm.Provider>
  );
};
