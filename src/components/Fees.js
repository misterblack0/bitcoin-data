import useSWR from "swr";
import styles from "../../styles/Fees.module.scss";
import Heading from "../components/Heading";
import { fetcher } from "./fetcher";

const Fees = () => {
  const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_FEES, fetcher, {
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
      <Heading title="Bitcoin Fees" />
      <div className={styles.feesContainer}>
        <div className={styles.feesBox}>
          <h2>Low priority</h2> <span>{data.hourFee} sat / vB</span>
        </div>
        <div className={styles.feesBox}>
          <h2>Medium priority</h2> <span>{data.halfHourFee} sat / vB</span>
        </div>
        <div className={styles.feesBox}>
          <h2>High priority</h2> <span>{data.fastestFee} sat / vB</span>
        </div>
      </div>
    </div>
  );
};

export default Fees;
