import { useAppSelector } from '@/stores/hooks';
import { useRouter } from 'next/router';
import React, { FC, ReactElement, useEffect } from 'react';

type withAuthProps = (Component?: FC | any) => FC;

const withAuth: withAuthProps = (Component) => {
  const Auth: FC = (): ReactElement | null => {
    const router = useRouter();
    const { token } = useAppSelector((state) => state.auth);
    const isAuthenticated = !!token;

    useEffect(() => {
      if (!isAuthenticated) router.push('/login');
      if (isAuthenticated && router.asPath == '/login') router.push('/');
    });

    return isAuthenticated ? <Component /> : <></>;
  };

  return Auth;
};

export default withAuth;
