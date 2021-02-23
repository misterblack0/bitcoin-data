import dataFormat from "./dataFormat";

export const TxsColumns = [
    {
        Header: "TXID",
        accessor: "txid",
        Cell: ({ value }) => dataFormat.truncateTxid(value, 5)
    },
    {
        Header: "Amount",
        accessor: "value",
        Cell: ({ value }) => dataFormat.amount(value)
    },
    {
        Header: "USD",
        accessor: "vsize",
        Cell: ({ value }) => dataFormat.currency(value)
    },
    {
        Header: "Fee",
        accessor: "fee",
        Cell: ({ value }) => dataFormat.fee(value)
    }
];

export const BlocksColumns = [
    {
        Header: "Height",
        accessor: "height"
    },
    {
        Header: "Mined",
        accessor: "timestamp",
        Cell: ({ value }) => dataFormat.timestamp(value)
    },
    {
        Header: "TXs",
        accessor: "tx_count",
        Cell: ({ value }) => dataFormat.tx(value)
    },
    {
        Header: "Size",
        accessor: "size",
        Cell: ({ value }) => dataFormat.size(value)
    }
];
