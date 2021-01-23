import React from "react";
import useSWR from "swr";
import { fetcher } from "../fetcher";
import styled from "styled-components";

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--dark);
    border-radius: 3rem;
    padding: 2rem;

    margin-bottom: 2rem; // DE STERS CAND ADAUG GRID
`;

const StyledHeading = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    height: 1rem;
    font-size: 1.5rem;
    font-weight: 400;
`;

const StyledBody = styled.div`
    font-size: 5rem;
    font-weight: 900;
    color: #fff;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const UnconfirmedTxs = () => {
    const { data, error } = useSWR("https://mempool.space/api/mempool", fetcher, {
        onErrorRetry: (error, revalidate, { retryCount }) => {
            // Never retry on 404.
            if (error.status === 404) return;
            // Only retry up to 10 times.
            if (retryCount >= 10) return;
            // Retry after 5 seconds.
            setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000);
        }
    });

    if (error) return "An error has occurred.";
    if (!data) return "Data could not be fetched.";

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
