import { Link } from "react-router-dom";
import styled from "styled-components";

// SVG 파일들을 import
import logoSvg from "../assets/logo.svg";
import searchSvg from "../assets/search.svg";
import visualSearchSvg from "../assets/visual-search.svg";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-bottom: 1px solid #ddd;
`;

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.div`
  margin-right: 20px;
`;

const SearchWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  background-color: #ebebeb;
  border-radius: 24px;
  margin: 0 20px;
  padding: 0 10px;
  position: relative;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 10px;
  display: flex;
  align-items: center;
  svg {
    fill: #6b6b6b;
  }
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px 40px;
  border: none;
  background-color: transparent;
  font-size: 14px;
  &::placeholder {
    color: #767676;
  }
`;

const VisualSearchIcon = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  svg {
    fill: #6b6b6b;
  }
`;

const HeaderNav = styled.nav`
  padding: 10px 20px;
  overflow-x: auto;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    white-space: nowrap;
  }

  li {
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: #767676;
    font-size: 14px;
    &:hover {
      color: #111;
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #767676;
  margin-left: 20px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #767676;
  font-size: 14px;
  margin-left: 20px;
  &:hover {
    color: #111;
  }
`;

const LoginButton = styled(NavButton)`
  padding: 8px 16px;
  border: none;
  &:hover {
    color: #111;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <TopHeader>
        <Logo>
          <img src={logoSvg} alt="Unsplash Logo" />
        </Logo>
        <SearchWrapper>
          <SearchIcon>
            <img src={searchSvg} alt="Search Icon" />
          </SearchIcon>
          <SearchInput type="text" placeholder="사진과 일러스트 검색" />
          <VisualSearchIcon>
            <img src={visualSearchSvg} alt="Visual Search Icon" />
          </VisualSearchIcon>
        </SearchWrapper>
        <HeaderRight>
          <NavButton>탐색</NavButton>
          <LoginButton>로그인</LoginButton>
          <MenuButton>☰</MenuButton>
        </HeaderRight>
      </TopHeader>
      <HeaderNav>
        <ul>
          <li>
            <Link to="/photos">사진</Link>
          </li>
          <li>
            <Link to="/illust">일러스트</Link>
          </li>
          <li>
            <Link to="/unsplash-plus">Unsplash+</Link>
          </li>
          <li>
            <Link to="/3d">3D 렌더링</Link>
          </li>
          <li>
            <Link to="/marine">마리</Link>
          </li>
          <li>
            <Link to="/architecture">건축 및 인테리어</Link>
          </li>
          <li>
            <Link to="/experimental">실험적인</Link>
          </li>
          <li>
            <Link to="/film">필름</Link>
          </li>
          <li>
            <Link to="/food-drink">식음료</Link>
          </li>
          <li>
            <Link to="/animals">동물</Link>
          </li>
          <li>
            <Link to="/nature">자연</Link>
          </li>
          <li>
            <Link to="/people">사람</Link>
          </li>
          <li>
            <Link to="/sports">스포츠</Link>
          </li>
          <li>
            <Link to="/travel">여행하다</Link>
          </li>
          <li>
            <Link to="/rising-stars">라이징 스타</Link>
          </li>
        </ul>
      </HeaderNav>
    </HeaderWrapper>
  );
}

export default Header;
