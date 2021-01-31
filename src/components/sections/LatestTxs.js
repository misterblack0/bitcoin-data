import React from "react";
import useSWR from "swr";
import { fetcher } from "../fetcher";
import styled from "styled-components";
import { TxsColumns } from "../columns";
import { Table } from "../Table";

const StyledContent = styled.div`
    grid-area: latestT;
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
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--white);
    margin-bottom: 2rem;
`;

const LatestTxs = () => {
    const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_LATESTTXS, fetcher, {
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
    if (!data) return "Loading...";

    return (
        <StyledContent>
            <StyledHeading>Latest transactions</StyledHeading>
            <Table columns={TxsColumns} data={data} />
        </StyledContent>
    );
};

export default LatestTxs;
