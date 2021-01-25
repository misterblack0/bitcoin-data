import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";

const Nav = styled.nav`
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.h1`
    font-size: 1.5rem;
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo>OnChain Data</Logo>
            <Hamburger />
        </Nav>
    );
};

export default Navbar;
