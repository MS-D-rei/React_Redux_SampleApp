import {
  HeaderAnchor,
  HeaderButton,
  HeaderHeader,
  HeaderLI,
  HeaderUL,
} from '@/components/HeaderStyle';
import { useAppDispatch, useAppSelector } from '@/hooks/store-hooks';
import { logout } from '@/store/AuthSlice';

function Header() {
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(
    (state) => state.authentication.isAuthenticated
  );

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <HeaderHeader>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <HeaderUL>
            <HeaderLI>
              <HeaderAnchor href="/">My Products</HeaderAnchor>
            </HeaderLI>
            <HeaderLI>
              <HeaderAnchor href="/">My Sales</HeaderAnchor>
            </HeaderLI>
            <HeaderLI>
              <HeaderButton onClick={logoutHandler}>Logout</HeaderButton>
            </HeaderLI>
          </HeaderUL>
        </nav>
      )}
    </HeaderHeader>
  );
}

export default Header;
