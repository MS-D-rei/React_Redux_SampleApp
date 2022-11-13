import {
  AuthControlDiv,
  AuthInput,
  AuthLabel,
  AuthMain,
} from '@/components/AuthStyle';

function Auth() {
  return (
    <AuthMain>
      <section>
        <form>
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
