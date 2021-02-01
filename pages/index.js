import React from "react";
import Head from "next/head";
import Layout from "../src/components/layout";
import Fees from "../src/components/sections/Fees";
import UnconfirmedTxs from "../src/components/sections/UnconfirmedTxs";
import LatestTxs from "../src/components/sections/LatestTxs";
import LatestBlocks from "../src/components/sections/LatestBlocks";

export default function IndexPage() {
    return (
        <>
            <Head>
                <meta property="og:title" content="OnChain Data" key="title" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout>
                <Fees />
                <UnconfirmedTxs />
                <LatestTxs />
                <LatestBlocks />
            </Layout>
        </>
    );
}
