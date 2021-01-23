import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import { navLinks } from "../../config";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    & li {
        padding: 18px 10px;
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
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #212429;

        position: fixed;
        transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        li {
            color: #fff;
        }
    }
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            {navLinks.map(({ url, name }, i) => (
                <li key={i}>
                    <Link href={url}>{name}</Link>
                </li>
            ))}
        </Ul>
    );
};

export default RightNav;

RightNav.propTypes = {
    open: PropTypes.bool
};
