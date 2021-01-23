import React from "react";
import Layout from "../src/components/layout";
import Fees from "../src/components/sections/Fees";
import UnconfirmedTxs from "../src/components/sections/UnconfirmedTxs";
import LatestTxs from "../src/components/sections/LatestTxs";
import LatestBlocks from "../src/components/sections/LatestBlocks";

export default function IndexPage() {
    return (
        <Layout>
            <Fees />
            <UnconfirmedTxs />
            <LatestTxs />
            <LatestBlocks />
        </Layout>
    );
}
