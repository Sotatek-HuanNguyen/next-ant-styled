import { modalSizes } from '@/constants';
import { Modal, ModalProps } from 'antd';
import React from 'react';

interface BaseModalProps extends ModalProps {
  size?: 'small' | 'medium' | 'large';
}

export const BaseModal: React.FC<BaseModalProps> = ({ size = 'medium', children, ...props }) => {
  const modalSize = modalSizes[size];

  return (
    <Modal getContainer={false} width={modalSize} {...props}>
      {children}
    </Modal>
  );
};
