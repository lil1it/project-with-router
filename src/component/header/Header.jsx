import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      {" "}
      <HeaderStyle>
        <h2>LOGO</h2>
        <div>
          <NavLink to="/products" style={{ textDecoration: "none" }}>
            <Pages>Products</Pages>
          </NavLink>
          <NavLink to="/mycart" style={{ textDecoration: "none" }}>
            <Pages>My Cart</Pages>
          </NavLink>
          <NavLink to="/myorders" style={{ textDecoration: "none" }}>
            <Pages>My Orders</Pages>
          </NavLink>
        </div>
      </HeaderStyle>
    </>
  );
};

export default Header;
const HeaderStyle = styled.header`
  width: 100%;
  background-color: #7cbbf3;
  height: auto;
  padding: 1.3rem 5rem 1.5rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  h2 {
    color: white;

    font-weight: bold;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }
`;

const Pages = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  :hover {
    color: gray;
  }
`;
