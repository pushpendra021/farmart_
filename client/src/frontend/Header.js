import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import { useAuth } from "./auth";
import { useEffect } from "react";


const Header = ({cartSize}) => {
//const isaloggedIn = useAuth();

  return (
    <div>
      <MainHeader>
        <NavLink to="/">
          <img src="/images/logo512.png" alt="My Company Logo" className="logo" />
        </NavLink>
        <Nav   size={cartSize} ></Nav>
      </MainHeader>
    </div>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem; /* Adjust the height as needed */
  }
`;

export default Header;