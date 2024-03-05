import { modalController } from '@/controllers/modal';
import { notificationController } from '@/controllers/notification';
import { App } from 'antd';

export const useFeedback = (): ReturnType<typeof App.useApp> => {
  const { message, notification, modal } = App.useApp();

  return {
    message,
    notification: {
      ...notificationController(notification),
      destroy: notification.destroy,
      open: notification.open,
    },
    modal: {
      ...modalController(modal),
      confirm: modal.confirm,
    },
  };
};
