import useSWR from "swr";
import styles from "../../styles/Exchanges.module.scss";

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

const ExchangesVolume = () => {
  const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_EXCHANGES, fetcher, {
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

  const numberFormat = (num) => {
    const options = { maximumFractionDigits: 0 };
    return new Intl.NumberFormat("en-US", options).format(num);
  };

  return (
    <div>
      
    </div>
  );
};

export default ExchangesVolume;