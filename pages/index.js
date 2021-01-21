import React from "react";
import Layout from "../src/components/layout";
import Fees from "../src/components/Fees";
import Unconfirmed from "../src/components/Unconfirmed";
import LatestTxs from "../src/components/LatestTxs";
import LatestBlocks from "../src/components/LatestBlocks";

export default function IndexPage() {
    return (
        <Layout>
            <Fees />
            <Unconfirmed />
            <LatestTxs />
            <LatestBlocks />
        </Layout>
    );
}
