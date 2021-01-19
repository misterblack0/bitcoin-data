import React from "react";
import useSWR from "swr";
import styled from "styled-components";
import { fetcher } from "./fetcher";

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 20rem;
    background-color: var(--indigo);
    overflow: hidden;
    border-radius: 1.5rem 1.5rem 0.5rem 0.5rem;
`;

const StyledHeading = styled.h1`
    display: flex;
    align-items: center;
    padding-left: 3rem;
    font-size: 2rem;
    font-weight: 400;
    height: 6rem;
    background-color: var(--white)
    color: $heading-color;
`;

const StyledBody = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    line-height: 350%;
    color: #6863a0;

    & h2 {
        font-size: 1.6rem;
    }

    & span {
        font-size: 4rem;
        font-weight: 900;
        color: var(--white);
    }
`;

const StyledLoader = styled.span`
    overflow: hidden;
    position: relative;
    -webkit-animation: progress 2s ease-in-out infinite;
    animation: progress 2s ease-in-out infinite;
    background: #2e324e no-repeat;
    background-image: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #5d6182, hsla(0, 0%, 100%, 0));
    background-size: 200px 100%;
    border-radius: 4px;
    width: 100%;
    height: 14px;
    display: inline-block;
`;

const Fees = () => {
    const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_FEES, fetcher, {
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
    if (!data) return <StyledLoader />;
    console.log(data);
    return (
        <StyledContent>
            <StyledHeading>Bitcoin Fees</StyledHeading>
            <StyledBody>
                <StyledItem>
                    <h2>Low priority</h2> <span>{data.hourFee} sat / vB</span>
                </StyledItem>
                <StyledItem>
                    <h2>Medium priority</h2> <span>{data.halfHourFee} sat / vB</span>
                </StyledItem>
                <StyledItem>
                    <h2>High priority</h2> <span>{data.fastestFee} sat / vB</span>
                </StyledItem>
            </StyledBody>
        </StyledContent>
    );
};

export default Fees;
