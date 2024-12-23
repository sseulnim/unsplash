import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logoSvg from "../assets/logo.svg";
import searchSvg from "../assets/search.svg";
import menuSvg from "../assets/menu.svg";
import visualSearchSvg from "../assets/visual_search.svg";
import { useState } from "react";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <HeaderWrapper>
      <TopHeader>
        <Logo>
          <Link to="/">
            <img src={logoSvg} alt="Unsplash Logo" />
          </Link>
        </Logo>
        <SearchWrapper>
          <SearchIconWrapper>
            <img src={searchSvg} alt="Search Icon" width="20" height="20" />
          </SearchIconWrapper>
          <SearchForm onSubmit={handleSearch}>
            <SearchInput
              type="text"
              placeholder="사진과 일러스트 검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchForm>
          <VisualSearchIconWrapper>
            <img
              src={visualSearchSvg}
              alt="Visual Search Icon"
              width="20"
              height="20"
            />
          </VisualSearchIconWrapper>
        </SearchWrapper>
        <HeaderRight>
          <NavButton>탐색</NavButton>
          <VerticalLine />
          <LoginButton>로그인</LoginButton>
          <MenuButton>
            <img src={menuSvg} alt="Menu Icon" />
          </MenuButton>
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
          <VerticalLine />
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

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0px;
  z-index: 100; // 다른 요소들보다 앞에 위치
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 56px;
`;

const Logo = styled.div``;

const SearchWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-right: 20px;
  height: 40px;
  border-radius: 24px;
  background-color: #ebebeb;
`;

const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  height: 100%;
`;

const SearchForm = styled.form`
  flex-grow: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1px 1px 2px 10px;
  border: none;
  background-color: transparent;
  font-size: 14px;

  &::placeholder {
    color: #767676;
  }
`;

const VisualSearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  height: 100%;
`;

const HeaderNav = styled.nav`
  padding: 0 20px;
  overflow-x: auto;
  height: 56px;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    height: 100%;
    align-items: center;
  }

  li {
    height: 100%;
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #767676;
    font-size: 14px;
    padding: 0 12px;

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
  color: #767676;
  padding: 0 16px;
  display: flex;
  align-items: center;
  height: 100%;

  img {
    width: 24px;
    height: 24px;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #767676;
  font-size: 14px;
  padding: 0 16px;

  &:hover {
    color: #111;
  }
`;

const LoginButton = styled(NavButton)`
  &:hover {
    color: #111;
  }
`;

const VerticalLine = styled.div`
  height: 32px;
  width: 1px;
  background-color: #d1d1d1;
  margin: 0 16px;
`;

export default Header;
