import {
  HeaderAnchor,
  HeaderButton,
  HeaderHeader,
  HeaderLI,
  HeaderUL,
} from '@/components/HeaderStyle';
import { useAppSelector } from '@/hooks/store-hooks';

function Header() {
  const isAuth = useAppSelector(
    (state) => state.authentication.isAuthenticated
  );
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
              <HeaderButton>Logout</HeaderButton>
            </HeaderLI>
          </HeaderUL>
        </nav>
      )}
    </HeaderHeader>
  );
}

export default Header;
