import { getPosts } from '@/api/posts';
import { GetListPostParams } from '@/interfaces/post';
import { useMutation, useQuery } from '@/utils/react-query';

export const useGetPosts = (params: GetListPostParams) =>
  useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(params),
    //  queryFn: getPosts, if there are no parameters
  });

export const useAddPostMutate = () =>
  useMutation({
    mutationFn: getPosts,
    onSuccess: () => {
      // handle when mutate success
      return;
    },
    onError: () => {
      // handle when mutate error
      return;
    },
  });
