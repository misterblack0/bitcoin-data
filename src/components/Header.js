import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    height: 8rem;
    background-color: var(--dark-indigo);
    padding-left: 4rem;
    color: var(--white);
`;

const Logo = styled.div`
    & h1 {
        font-size: 2.5rem;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo>
                <h1>OnChain Data</h1>
            </Logo>
            <Navbar />
        </StyledHeader>
    );
};

export default Header;
