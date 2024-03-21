import { PaginationParams } from '@/interfaces';

export interface GetUsersRequest extends PaginationParams {
  search?: string;
  filterUser?: string;
}

export interface IParams extends GetUsersRequest {}

export interface IUser {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  id: string;
  accountId: string;
  email?: string;
  username?: string;
  fullName: string;
  kanaJapanese?: string;
  companyName: string;
  description: string;
  gender: string;
  nationality: string;
  ageRange: string;
  birth: string;
  avatarUrl: string;
  address: string;
  language: string;
  receive_mail: string;
  collection_address: string[];
}

export interface GetUsersResponse {
  users: IUser[];
}
