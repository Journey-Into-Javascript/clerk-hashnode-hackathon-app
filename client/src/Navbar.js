import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo href="">
        Fire<span>List</span>
      </Logo>

      <SearchBar>
        <form>
          <Input type="text" placeholder="Search"></Input>
        </form>
      </SearchBar>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">Home</MenuLink>
        <MenuLink href="">Firelist</MenuLink>
        <MenuLink href="">Profile</MenuLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background: var(--bg-prim);
`;

const NavItems = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  background: var(--bg-prim);
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: var(--text-prim);
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  transition: all 0.3s ease-in;
  margin-right: auto;

  span {
    font-weight: 400;
    font-size: 1.3rem;
  }

  &:hover {
    color: var(--text-sec);
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: var(--text-prim);
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: var(--text-prim);
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: var(--text-sec);
  }
`;

const SearchBar = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: var(--text-prim);
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  align-items: flex-end;
`;

const Input = styled.input`
  font-size: 0.9rem;
  text-align: center;
  text-decoration: none;
  color: var(--text-prim);
  background-color: transparent;
  width: 40%;
  border: none;
  border-radius: 15px;
  transition: all 0.3s ease-in;

  &::placeholder {
    color: var(--text-prim);
  }

  &:focus,
  &:active {
    outline: none;
    width: 100%;
    background-color: var(--bg-prim);
    border: thick double var(--text-prim);
    font-weight: 400;

    &::placeholder {
      color: var(--bg-prim);
    }
  }

  &:hover {
    border: thick double var(--text-prim);
  }

  @media (max-width: 768px) {
    width: 100%;
    transition: none;
  }
`;

export default Navbar;
