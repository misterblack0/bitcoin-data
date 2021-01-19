import React from "react";
import useSWR from "swr";
import { fetcher } from "./fetcher";
import styled from "styled-components";

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 15rem;
    background-color: var(--dark);
    border-radius: 3rem;
    margin-top: 3rem;
`;

const StyledHeading = styled.h1`
    font-size: 1.3rem;
    font-weight: 400;
    height: 2.5rem;
    color: var(--white);
    display: flex;
    justify-content: center;

    z-index: 5;
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

const Unconfirmed = () => {
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

export default Unconfirmed;
