import { getUsers } from '@/api/users';
import { GetUsersRequest } from '@/interfaces/users';
import { useQuery } from '@/utils/react-query';

import useAppQuery from '../useAppQuery';

export const useGetUsers = (params: GetUsersRequest) =>
  useQuery({
    queryKey: ['users', params],
    queryFn: () => getUsers(params),
  });

export const useGetUsersForCSV = (params: GetUsersRequest) =>
  useAppQuery({
    queryKey: ['usersCSV', params],
    queryFn: () => getUsers(params),
    enabled: !!params.pageSize,
  });
