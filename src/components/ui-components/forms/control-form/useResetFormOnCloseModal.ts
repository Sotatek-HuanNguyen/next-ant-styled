import { BaseFormInstance } from '@/components/common/forms/base-form';
import { useEffect, useRef } from 'react';

export const useResetFormOnCloseModal = ({
  form,
  open,
}: {
  form: BaseFormInstance;
  open: boolean;
}): void => {
  const prevOpenRef = useRef<boolean>();

  const prevOpen = prevOpenRef.current;

  useEffect(() => {
    prevOpenRef.current = open;
  }, [open]);

  useEffect(() => {
    if (!open && prevOpen) {
      form.resetFields();
    }
  }, [open, form, prevOpen]);
};
