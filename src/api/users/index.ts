import { request } from '@/api/request';
import { GetUsersRequest, GetUsersResponse, ResponseData } from '@/interfaces';

export const getUsers = (params: GetUsersRequest) =>
  request.get<GetUsersRequest, ResponseData<GetUsersResponse>>('/admin/users', params);
