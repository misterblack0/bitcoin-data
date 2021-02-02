import React from "react";
import styled from "styled-components";
import useFetch from "../useFetch";

const StyledContent = styled.div`
    grid-area: unconfirmed;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--dark);
    border-radius: 3rem;
    padding: 1.5rem;
    margin-bottom: 2rem;

    @media (min-width: 1280px) {
        margin-bottom: 0;
    }
`;

const StyledHeading = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 1.5rem;
    font-weight: 400;
`;

const StyledBody = styled.div`
    font-size: 6.5rem;
    font-weight: 900;
    color: #fff;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const UnconfirmedTxs = () => {
    const { data, error } = useFetch(process.env.NEXT_PUBLIC_API_UNCONFIRMEDTXS);
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";

    const numberFormat = (num) => {
        const options = { maximumFractionDigits: 0 };
        return new Intl.NumberFormat("en-US", options).format(num);
    };

    return (
        <StyledContent>
            <StyledHeading>Unconfirmed transactions</StyledHeading>
            <StyledBody>{numberFormat(data.count)}</StyledBody>
        </StyledContent>
    );
};

export default UnconfirmedTxs;
