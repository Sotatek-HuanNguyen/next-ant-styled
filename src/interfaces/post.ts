import { PaginationParams } from '@/interfaces';

export interface GetListPostParams extends PaginationParams {
  search: string;
}
