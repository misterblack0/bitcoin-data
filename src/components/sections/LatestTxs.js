import React from "react";
import useFetch from "../useFetch";
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
    const { data, error } = useFetch(process.env.NEXT_PUBLIC_API_LATESTTXS);
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
