import { request } from '@/api/request';
import { LoginRequest, LoginResponse, ResponseData } from '@/interfaces';

export const login = (body: LoginRequest) =>
  request.post<LoginRequest, ResponseData<LoginResponse>>('/admin/sign-in', body);
