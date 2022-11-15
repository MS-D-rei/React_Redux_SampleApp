import {
  AuthControlDiv,
  AuthInput,
  AuthLabel,
  AuthMain,
} from '@/components/AuthStyle';
import { useAppDispatch } from '@/hooks/store-hooks';
import { login } from '@/store/AuthSlice';
import React from 'react';

function Auth() {
  const dispatch = useAppDispatch();
  const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login());
  }
  return (
    <AuthMain>
      <section>
        <form onSubmit={loginHandler}>
          <AuthControlDiv>
            <AuthLabel htmlFor="email">Email</AuthLabel>
            <AuthInput type="email" id="email" />
          </AuthControlDiv>
          <AuthControlDiv>
            <AuthLabel htmlFor="password">Password</AuthLabel>
            <AuthInput type="password" id="password" />
          </AuthControlDiv>
          <button>Login</button>
        </form>
      </section>
    </AuthMain>
  );
}

export default Auth;
