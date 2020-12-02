import useSWR from "swr";
import { useMemo } from "react";
import Table from "./Table";
import Heading from "./Heading";
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

const Blocks = () => {
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

  const timeSince = (date) => {
    var seconds = Math.floor(new Date().getTime() / 1000 - date),
      interval = Math.floor(seconds / 31536000);

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + " days ago";

    interval = Math.floor(seconds / 3600);
    if (interval > 1) return interval + " hours ago";
    if (interval >= 1) return interval + " hour ago";

    interval = Math.floor(seconds / 60);
    if (interval <= 1) return interval + " minute ago";
    if (interval > 1) return interval + " minutes ago";

    return Math.floor(seconds) + " seconds ago";
  }

  const numberFormat = (num) => {
    const options = { maximumFractionDigits: 0 };
    return new Intl.NumberFormat("en-US", options).format(num);
  };

  const columns = useMemo(() => [
    {
      Header: "Height",
      accessor: (item) => (
        <div>
          <a href={`block/${item.id}`}>{item.height}</a>
        </div>
      ),
    },
    {
      Header: "Block Size",
      accessor: (item) => (
        <div className={styles.blockSize}>{formatBytes(item.size)}</div>
      ),
    },
    {
      Header: "Txs",
      accessor: (item) => (
        <div className={styles.transactions}>
          {numberFormat(item.tx_count)} transactions
        </div>
      ),
    },
    {
      Header: "Mined",
      accessor: (item) => <div>{timeSince(item.timestamp)}</div>,
    },
  ]);

  if (error) return "An error has occurred.";
  if (!data) return <span className={styles.loader}></span>;

  return (
    <div className={styles.container}>
      <Heading title="Latest Blocks" />
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Blocks;
