import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledHamburgerButton = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.2rem;
        background-color: #fff;
        border-radius: var(--border-radius);
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }
        &:nth-child(2) {
            transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }
        &:nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;

const Hamburger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledHamburgerButton open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledHamburgerButton>
            <RightNav open={open} />
        </>
    );
};
export default Hamburger;
