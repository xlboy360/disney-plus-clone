import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/img/logo.svg" />
      <NavMenu>
        <a>
          <img src="/img/home-icon.svg" alt="Home icon" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/img/search-icon.svg" alt="Search icon" />
          <span>Search</span>
        </a>
        <a>
          <img src="/img/watchlist-icon.svg" alt="Watchlist icon" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/img/original-icon.svg" alt="Original icon" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/img/movie-icon.svg" alt="Movie icon" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/img/series-icon.svg" alt="Series icon" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImage src="https://yt3.ggpht.com/yti/AHXOFjU5C7xYcHF-oqr-IlCh8W3fsWTZY-nWN2kn9MOB=s88-c-k-c0x00ffffff-no-rj-mo" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 12px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid white;
`;
