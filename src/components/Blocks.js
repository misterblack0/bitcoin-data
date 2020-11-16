import useSWR from "swr";
import { useMemo } from "react";
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

  const numberFormat = (num) => {
    const options = { minimumFractionDigits: 0,
      maximumFractionDigits: 0,};
    return new Intl.NumberFormat("en-US", options).format(num);
  };

  const columns = useMemo(() => [
    {
      Header: "Height",
      accessor: (item) => <div>{item.height}</div>,
    },
    {
      Header: "Txes",
      accessor: (item) => <div>{item.tx_count}</div>,
    },
    {
      Header: "Block Size",
      accessor: (item) => <div>{numberFormat(item.size)} MB</div>,
    },
  ]);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}
