import { request } from '@/api/request';
import { GetListPostParams, ResponseData } from '@/interfaces';

export const getPosts = (params: GetListPostParams) =>
  request.get<GetListPostParams, ResponseData<Array<string>>>('/post', params);
