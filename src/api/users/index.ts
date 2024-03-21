import { request } from '@/api/request';
import { GetUsersRequest, GetUsersResponseData, ResponseData } from '@/interfaces';

export const getUsers = (params: GetUsersRequest) =>
  request.get<GetUsersRequest, ResponseData<GetUsersResponseData>>('/admin/users', params);
