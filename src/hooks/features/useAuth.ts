import { login } from '@/api/auth';

import useAppMutation, { AppMutationOptions } from '../useAppMutation';

export const useLoginMutate = (options?: AppMutationOptions) =>
  useAppMutation(login, {
    useAppMutationProps: options,
  });
