import { RESPONSE_CODE } from '@/constants';
import { ApiError, ServerError, ValidationError } from '@/interfaces';
import { FormInstance } from 'antd';
import find from 'lodash/find';
import forEach from 'lodash/forEach';

type ARGS = {
  error: ApiError;
  form?: FormInstance;
};

export default function useLoadServerError() {
  const loadServerErrors = (args: ARGS) => {
    const { error, form } = args;

    const isClientError =
      !Object.prototype.hasOwnProperty.call(error, 'response') && !!error.statusText;
    if (isClientError) {
      showError({ message: error.statusText });
      return;
    }

    if (!error) {
      return;
    }

    const response = error;

    if (response.status === RESPONSE_CODE.SERVER_ERROR) {
      // show toast notification
      return;
    }

    if (form !== undefined && response.status === RESPONSE_CODE.VALIDATION_ERROR) {
      const data = response.data as ValidationError;
      attachErrorsIntoForm(data, form);
      return;
    }
    const data = response.data as ServerError;
    showError(data.detail || []);
  };

  const attachErrorsIntoForm = (data: ValidationError, form: FormInstance) => {
    let errorLoaded = false;

    const formValues = form.getFieldsValue();
    forEach(formValues, (_: string, key: string) => {
      const info = find(data.detail, (item) => item.field === key);
      if (!info) {
        return;
      }

      errorLoaded = true;
      // TODO handler i18n with item.key
      form.setFieldsValue({
        [key]: {
          value: null,
          error: info.message,
        },
      });
    });

    if (errorLoaded) {
      return;
    }

    // show toast message
    let message = 'Some fields are invalid';
    const info = data.detail[0].message;
    if (info) {
      message = info;
    }
    showError(message);
  };

  const showError = (error: any) => {
    // Custom i18n with error.key
    let message = error[0]?.message || error;

    if (message === 'canceled') {
      return;
    }

    if (message === 'Too Many Attempts.') {
      message = '...';
    }

    // show toast notification
  };

  return {
    loadServerErrors,
  };
}
