import { numberFormat, currencyFormat, formatBytes, timeSince } from "./dataFormat";

function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) : str;
}

export const TxsColumns = [
    {
        Header: "TXID",
        accessor: "txid",
        Cell: ({ value }) => truncate(value, 5)
    },
    {
        Header: "Amount",
        accessor: "value"
    },
    {
        Header: "USD",
        accessor: "vsize",
        Cell: ({ value }) => currencyFormat(value)
    },
    {
        Header: "Fee",
        accessor: "fee"
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
        Cell: ({ value }) => numberFormat(value)
    },
    {
        Header: "Size",
        accessor: "size",
        Cell: ({ value }) => formatBytes(value)
    }
];
