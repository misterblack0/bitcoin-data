import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import Header from "./Header";

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    & #content {
        margin: 5rem;
    }
`;

const Layout = ({ children }) => {
    return (
        <>
            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <StyledContent>
                        <Header />
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
