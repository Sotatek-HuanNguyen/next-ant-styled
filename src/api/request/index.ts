import { RESPONSE_CODE } from '@/constants';
import cookies from '@/utils/cookie';
import Axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

// import Router from 'next/router';

interface FailedRequest {
  resolve: (value: AxiosResponse<any, any> | PromiseLike<AxiosResponse<any, any>>) => void;
  reject: (reason?: AxiosError) => void;
  config: AxiosRequestConfig & { _retry?: boolean };
}

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    // config header
  },
});

let isRefreshing = false;
let failedRequestsQueue: Array<FailedRequest> = [];

axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = cookies.get('access_token');
    if (config) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig<any> & { _retry?: boolean };
    if (error.response?.status === RESPONSE_CODE.UNAUTHORIZED && !originalRequest._retry) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const response = await request.post<{ refreshToken: string }, { accessToken: string }>(
            'YOUR_REFRESH_TOKEN_ENDPOINT',
            {
              refreshToken: 'YOUR_REFRESH_TOKEN',
            }
          );
          cookies.set('access_token', response.accessToken);
          failedRequestsQueue.forEach((queuedRequest) => {
            if (queuedRequest.config.headers) {
              queuedRequest.config.headers.Authorization = `Bearer ${response.accessToken}`;
              axiosInstance(queuedRequest.config)
                .then((res) => queuedRequest.resolve(res))
                .catch((err) => queuedRequest.reject(err));
            }
          });

          failedRequestsQueue = [];
        } catch (error) {
          // Router.push('/login');
        } finally {
          isRefreshing = false;
        }

        originalRequest._retry = true;
        return axiosInstance(originalRequest);
      } else {
        return new Promise<AxiosResponse>((resolve, reject) => {
          failedRequestsQueue.push({ resolve, reject, config: originalRequest });
        });
      }
    }
    if (error.response?.status === RESPONSE_CODE.SERVER_ERROR) {
      return Promise.reject(error.response);
    }
    return Promise.reject(error.response);
  }
);

export const request = {
  get<ReqType, ResType>(url: string, params?: ReqType): Promise<ResType> {
    return axiosInstance.get(url, { params });
  },
  post<ReqType, ResType>(
    url: string,
    data?: ReqType,
    config?: AxiosRequestConfig<ReqType>
  ): Promise<ResType> {
    return axiosInstance.post(url, data, config);
  },
  put<ReqType, ResType>(url: string, data?: ReqType): Promise<ResType> {
    return axiosInstance.put(url, data);
  },
  patch<ReqType, ResType>(url: string, data?: ReqType): Promise<ResType> {
    return axiosInstance.patch(url, data);
  },
  delete<ReqType, ResType>(url: string, data?: ReqType): Promise<ResType> {
    return axiosInstance.delete(url, { data });
  },
};
