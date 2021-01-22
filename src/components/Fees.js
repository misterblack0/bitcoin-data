import React from "react";
import useSWR from "swr";
import styled from "styled-components";
import { fetcher } from "./fetcher";

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--dark);
    border-radius: 3rem;
    padding: 2rem;

    margin-bottom: 2rem; // DE STERS CAND ADAUGAM GRID

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
    }

    @media (min-width: 1280px) {
    }
`;

const StyledHeading = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    height: 1rem;
    font-size: 1.5rem;
    font-weight: 400;

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
    }

    @media (min-width: 1280px) {
    }
`;

const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
        flex-direction: row;
    }

    @media (min-width: 1280px) {
    }
`;

const StyledItem = styled.div`
    border-color: (#767676, #858585);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    font-size: 1.2rem;
    color: var(--white);
    border: 1px solid #2c2f36;
    border-radius: 2rem;
    padding: 1rem;
    margin: 1rem;

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
    }

    @media (min-width: 1280px) {
    }

    & h2 {
        font-size: 1.1rem;
        color: var(--light-gray);
    }

    & span {
        display: flex;
        justify-content: center;
        padding: 1rem;
        font-size: 4rem;
        width: 100%;
        font-weight: 900;
        border-radius: 2rem;
        @media (min-width: 768px) {
        }

        @media (min-width: 1024px) {
        }

        @media (min-width: 1280px) {
        }
    }
`;

const Fees = () => {
    const { data, error } = useSWR("https://mempool.space/api/v1/fees/recommended", fetcher, {
        // process.env.NEXT_PUBLIC_API_FEES
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
