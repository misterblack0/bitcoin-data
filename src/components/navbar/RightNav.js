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
        font-size: 1.2rem;
        font-weight: 400;
        text-decoration: none;
        color: var(--gray);
        transition: all 0.1s;

        &:hover {
            color: var(--white);
        }
    }
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        background-color: #2c3037;
        position: fixed;
        transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
        top: -20px;
        right: 0;
        padding: 50px 10px;
        height: 100vh;
        width: min(75vw, 400px);
        box-shadow: -10px 0px 30px -15px var(--shadow);
        transition: var(--transition);

        & li {
            color: #fff;
        }

        & a {
            font-size: 1.5rem;
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
