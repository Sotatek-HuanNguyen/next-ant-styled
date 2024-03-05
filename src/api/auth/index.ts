import { request } from '@/api/request';
import { LoginRequest, ResponseData } from '@/interfaces';

export const login = (body: LoginRequest) =>
  request.post<LoginRequest, ResponseData<Array<string>>>('/login', body);
