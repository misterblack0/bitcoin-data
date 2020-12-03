import useSWR from "swr";
import styles from "../../styles/Mempool.module.scss";
import MempoolChart from "./MempoolChart";
import Heading from "../components/Heading";
import { fetcher } from "./fetcher";

const Mempool = () => {
  const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_MEMPOOL, fetcher, {
    onErrorRetry: (error, revalidate, { retryCount }) => {
      // Never retry on 404.
      if (error.status === 404) return;
      // Only retry up to 10 times.
      if (retryCount >= 10) return;
      // Retry after 5 seconds.
      setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000);
    },
  });

  if (error) return "An error has occurred.";
  if (!data) return <span className={styles.loader}></span>;

  return (
    <div className={styles.container}>
      <Heading title="Mempool Chart" />
      <div className={styles.chart}>
        <MempoolChart />
      </div>
    </div>
  );
};

export default Mempool;
