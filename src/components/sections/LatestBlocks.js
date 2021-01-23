import React from "react";
import useSWR from "swr";
import { fetcher } from "../fetcher";
import styled from "styled-components";
import { BlocksColumns } from "../columns";
import { Table } from "../Table";

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
    justify-content: center;
    padding-left: 3rem;
    font-size: 1.3rem;
    font-weight: 400;
    height: 1rem;
    color: var(--white);
`;

const LatestBlocks = () => {
    const { data, error } = useSWR("https://mempool.space/api/blocks", fetcher, {
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

    return (
        <StyledContent>
            <StyledHeading>Latest blocks</StyledHeading>
            <Table columns={BlocksColumns} data={data} />
        </StyledContent>
    );
};

export default LatestBlocks;
