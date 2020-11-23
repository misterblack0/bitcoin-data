import useSWR from "swr";
import { Fragment, useMemo } from "react";
import Table from "./Table";
import styles from "../../styles/Blocks.module.scss";

const fetcher = async (url) => {
  const res = await fetch(url);
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function Blocks() {
  const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_BLOCKS, fetcher, {
    onErrorRetry: (error, revalidate, { retryCount }) => {
      // Never retry on 404.
      if (error.status === 404) return;
      // Only retry up to 10 times.
      if (retryCount >= 10) return;
      // Retry after 5 seconds.
      setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000);
    },
  });

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1000; // Change k = 1000 or sizes = ["..."] as you want (bits or bytes)
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const columns = useMemo(() => [
    {
      Header: "Height",
      accessor: (item) => <div>{item.height}</div>,
    },
    {
      Header: "Txs",
      accessor: (item) => <div>{item.tx_count}</div>,
    },
    {
      Header: "Block Size",
      accessor: (item) => <div>{formatBytes(item.size)}</div>,
    },
  ]);

  if (error) return "An error has occurred.";
  if (!data) return <span className={styles.loader}></span>;

  return (
    <Fragment>
      <Table columns={columns} data={data} />
    </Fragment>
  );
}
