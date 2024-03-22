import { getUsers } from '@/api/users';
import { GetUsersRequest } from '@/interfaces/users';

import useAppQuery from '../useAppQuery';

export const useGetUsers = (params: GetUsersRequest) =>
  useAppQuery({
    queryKey: ['users', params],
    queryFn: () => getUsers(params),
  });

export const useGetUsersForCSV = (params: GetUsersRequest) =>
  useAppQuery({
    queryKey: ['usersCSV', params],
    queryFn: () => getUsers(params),
    enabled: !!params.pageSize,
  });
