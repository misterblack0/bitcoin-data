import useSWR from "swr";
import styles from "../../styles/Fees.module.scss";

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

export default function Fees() {
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
  if (!data) return "Loading...";

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Bitcoin <span>Fees</span>
      </h1>
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
}
