import { PRIVATE_ROUTE } from '@/constants';
import { ROUTER_PATH } from '@/interfaces';
import cookies from '@/utils/cookie';
import { useRouter } from 'next/router';
import React, { FC, ReactNode, useEffect } from 'react';

interface AuthenticationProps {
  children: ReactNode;
}

const Authentication: FC<AuthenticationProps> = ({ children }) => {
  const router = useRouter();
  const token = cookies.get('access_token');
  const isAuthenticated = !!token;

  useEffect(() => {
    if (!isAuthenticated && PRIVATE_ROUTE.includes(router.pathname)) router.push(ROUTER_PATH.LOGIN);
    if (isAuthenticated && router.asPath == ROUTER_PATH.LOGIN) router.push(ROUTER_PATH.DASHBOARD);
  }, [isAuthenticated, router]);

  return <>{children}</>;
};

export default Authentication;
