import React from "react";
import useFetch from "../useFetch";
import styled from "styled-components";
import { BlocksColumns } from "../columns";
import { Table } from "../Table";

const StyledContent = styled.div`
    grid-area: latestB;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--dark);
    border-radius: 3rem;
    padding: 1.5rem;

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
    margin-bottom: 2rem;
`;

const LatestBlocks = () => {
    const { data, error } = useFetch(process.env.NEXT_PUBLIC_API_LATESTBLOCKS);
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";

    return (
        <StyledContent>
            <StyledHeading>Latest blocks</StyledHeading>
            <Table columns={BlocksColumns} data={data} />
        </StyledContent>
    );
};

export default LatestBlocks;
