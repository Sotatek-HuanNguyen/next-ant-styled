import { RESPONSE_CODE } from '@/constants';
import { removeCredentials } from '@/stores/auth/auth.slice';
import { RootState } from '@/stores/store';
import { store } from '@/stores/store';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import Router from 'next/router';

export const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithAuthentication: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error && result?.error?.status === RESPONSE_CODE.UNAUTHORIZED) {
    store.dispatch(removeCredentials());
    Router.push('/login');
  }

  return result;
};
