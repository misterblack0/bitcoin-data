import {
    truncateTxid,
    amountFormat,
    currencyFormat,
    feeFormat,
    timeSince,
    txsFormat,
    formatSize
} from "./dataFormat";

export const TxsColumns = [
    {
        Header: "TXID",
        accessor: "txid",
        Cell: ({ value }) => truncateTxid(value, 5)
    },
    {
        Header: "Amount",
        accessor: "value",
        Cell: ({ value }) => amountFormat(value)
    },
    {
        Header: "USD",
        accessor: "vsize",
        Cell: ({ value }) => currencyFormat(value)
    },
    {
        Header: "Fee",
        accessor: "fee",
        Cell: ({ value }) => feeFormat(value)
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
        Cell: ({ value }) => timeSince(value)
    },
    {
        Header: "TXs",
        accessor: "tx_count",
        Cell: ({ value }) => txsFormat(value)
    },
    {
        Header: "Size",
        accessor: "size",
        Cell: ({ value }) => formatSize(value)
    }
];
