import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { navLinks } from "../config";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    height: 5rem;
    padding-left: 4rem;
    color: var(--white);
`;

const Logo = styled.div`
    & h1 {
        font-size: 1.5rem;
    }
`;

const Navbar = styled.nav`
    width: 15rem;

    & ul {
        display: flex;
        justify-content: space-evenly;
        list-style: none;
    }

    & a {
        font-size: 1rem;
        font-weight: 700;
        text-decoration: none;
        color: var(--gray);
        transition: all 0.1s;

        &:hover {
            color: var(--white);
        }
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo>
                <h1>OnChain Data</h1>
            </Logo>
            <Navbar>
                <ul>
                    {navLinks.map(({ url, name }, i) => (
                        <li key={i}>
                            <Link href={url}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </Navbar>
        </StyledHeader>
    );
};

export default Header;
