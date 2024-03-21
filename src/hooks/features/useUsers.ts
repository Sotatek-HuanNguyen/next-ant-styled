import { getUsers } from '@/api/users';
import { GetUsersRequest } from '@/interfaces/users';
import { useQuery } from '@/utils/react-query';

export const useGetUsers = (params: GetUsersRequest) =>
  useQuery({
    queryKey: ['users', params],
    queryFn: () => getUsers(params),
  });
