import { SORT_TYPE } from '@/constants';
import { AxiosResponse } from 'axios';
import { ReactNode } from 'react';

export enum RESPONSE_CODE {
  SUCCESS = 200,
  UNAUTHORIZED = 401,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  PERMISSION = 403,
  SERVER_ERROR = 500,
  VALIDATION_ERROR = 422,
}

export type PaginationParams = {
  page?: number;
  pageSize?: number;
  sortField?: string;
  sortBy?: keyof typeof SORT_TYPE | null;
};

export type MetaData = {
  data?: {
    pagination?: {
      total?: number;
      last_page?: number;
      per_page?: number;
      current_page?: number;
      total_pages?: number;
    };
  };
};

export type ResponseData<T> = MetaData & {
  data: T;
  success: boolean;
  message?: string;
};

export type ValidationError = {
  detail: {
    [key: string]: {
      field: string;
      error: string;
      message: string;
      statusCode: number;
      success: boolean;
    };
  };
};

export type ServerError = {
  error: string;
  message: string;
  statusCode: number;
  success: boolean;
};

export type ApiError = AxiosResponse<ServerError | ValidationError>;

export type WithChildrenProps<T = undefined> = T extends undefined
  ? {
      children?: ReactNode;
    }
  : T & {
      children?: ReactNode;
    };

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}
