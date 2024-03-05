import React from 'react';

import * as S from './index.styles';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <S.BackgroundWrapper>
        <S.LoginWrapper>{children}</S.LoginWrapper>
      </S.BackgroundWrapper>
    </S.Wrapper>
  );
};

export default AuthLayout;
