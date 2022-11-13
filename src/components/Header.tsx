import {
  HeaderAnchor,
  HeaderButton,
  HeaderHeader,
  HeaderLI,
  HeaderUL,
} from '@/components/HeaderStyle';

function Header() {
  return (
    <HeaderHeader>
      <h1>Redux Auth</h1>
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
    </HeaderHeader>
  );
}

export default Header;
