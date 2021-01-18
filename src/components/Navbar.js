import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { navLinks } from "../config";

const StyledNavbar = styled.nav`
    width: 30rem;

    & ul {
        display: flex;
        justify-content: space-evenly;
        list-style: none;
    }

    & a {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--light-indigo);
    }
`;

const Navbar = () => {
    return (
        <StyledNavbar>
            <ul>
                {navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                        <Link href={url}>{name}</Link>
                    </li>
                ))}
            </ul>
        </StyledNavbar>
    );
};

export default Navbar;
