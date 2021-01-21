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
        accessor: "vsize"
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
        accessor: "timestamp"
    },
    {
        Header: "TXs",
        accessor: "tx_count"
    },
    {
        Header: "Size",
        accessor: "size"
    }
];
