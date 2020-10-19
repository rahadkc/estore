import React from "react";
import { useSelector } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import styled from 'styled-components';
import { isAuthenticated } from '../features/auth/authSlice';
import { inCartItems } from '../features/cart/cartSlice';



const NavBar = () => {
  const number = useSelector(inCartItems);
  const isAdmin = useSelector(isAuthenticated);

  console.log('isAdmin', isAdmin)
  return (
    <Header>
      <div className="container">
        <Nav>
          <Brand to="/">
            Staff Asia
          </Brand>

          <div className="navbar-nav">
            <NavItem activeStyle={{ color: 'orange' }} to="/products">
              Products
            </NavItem>
            <NavItem activeStyle={{ color: 'orange' }} to="/cart">
              Cart {!!number && <Count>{number}</Count>}
            </NavItem>
            {!isAdmin && (
              <NavItem activeStyle={{ color: 'orange' }} to="/login">
                Login
              </NavItem>
            )}
            {isAdmin && (
              <NavItem activeStyle={{ color: 'orange' }} to="/logout">
                Logout
              </NavItem>
            )}
          </div>
        </Nav>
      </div>
    </Header>
  );
};

export default NavBar;



const Count = styled.span`
  position: absolute;
  width: 28px;
  height: 28px;
  background: red;
  color: white;
  text-align: center;
  line-height: 28px;
  border-radius: 50%;
  top: 5px;
  right: -12px;
  font-size: 13px;
`

const Brand = styled(Link)`
padding: 20px 15px;
text-decoration: none;
font-weight: bold;
letter-spacing: .5px;
`

const NavItem = styled(NavLink)`
  padding: 20px 15px;
  display: inline-block;
  text-decoration: none;
  position:relative;
`
const Header = styled.header`
  background: white;
  margin-bottom: 25px;
`
const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`