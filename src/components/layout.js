import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import Navbar from "./navbar/Navbar";

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

    & #content {
        margin: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 1280px) {
            margin: 2rem 4rem;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 30px 30px;
            grid-template-areas:
                "fees fees fees"
                "latestT unconfirmed latestB";
        }
    }
`;

const Layout = ({ children }) => {
    return (
        <>
            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <StyledContent>
                        <Navbar />
                        <div id="content">{children}</div>
                    </StyledContent>
                </ThemeProvider>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
