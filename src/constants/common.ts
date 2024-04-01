import { CurrencyTypeEnum } from '@/interfaces';

export enum ROUTER_PATH {
  LOGIN = '/auth/login',
  DASHBOARD = '/dashboard',
}

export const PRIVATE_ROUTE: string[] = [ROUTER_PATH.DASHBOARD];
export const AUTH_ROUTE: string[] = [ROUTER_PATH.LOGIN];

export const SCREENS = {
  DESKTOP: 1024,
};

export const LOCALE = {
  EN: 'en',
  VI: 'vi',
};

export const DEFAULT_LOCALE = LOCALE.EN;

export enum RESPONSE_CODE {
  SUCCESS = 200,
  UNAUTHORIZED = 401,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  PERMISSION = 403,
  SERVER_ERROR = 500,
  VALIDATION_ERROR = 422,
}

export enum Priority {
  INFO,
  LOW,
  MEDIUM,
  HIGH,
}

export enum SORT_TYPE {
  DESC = 'desc',
  desc = 'desc',
  ASC = 'ASC',
  asc = 'asc',
}

export const DATE_FORMAT = {
  MONTH_YEAR: 'MM/yy',
  BASIC: 'DD-MM-YYYY',
  DATE_FULL: 'YYYY/MM/DD HH:mm',
};

export const currencies = {
  [CurrencyTypeEnum.USD]: {
    text: 'USD',
    icon: '$',
  },
  [CurrencyTypeEnum.BTC]: {
    text: 'BTC',
    icon: '₿',
  },
  [CurrencyTypeEnum.ETH]: {
    text: 'ETH',
    icon: 'Ξ',
  },
};

export const passwordPattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);

export const websitePattern =
  /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?/gi;
