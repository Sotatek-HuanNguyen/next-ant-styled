import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import { FC } from 'react';

import * as S from './index.styles';

export type BaseCalendarProps = CalendarProps<Dayjs>;

export const BaseCalendar: FC<BaseCalendarProps> = (props) => {
  return <S.Calendar {...props} />;
};
