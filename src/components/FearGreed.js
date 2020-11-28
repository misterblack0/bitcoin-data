import useSWR from "swr";
import styles from "../../styles/FearGreed.module.scss";
import ProgressBar from "../components/ProgressBar";
import Heading from "../components/Heading";

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

const Unconfirmed = () => {
  const { data, error } = useSWR(
    process.env.NEXT_PUBLIC_API_FEARGREED,
    fetcher,
    {
      onErrorRetry: (error, revalidate, { retryCount }) => {
        // Never retry on 404.
        if (error.status === 404) return;
        // Only retry up to 10 times.
        if (retryCount >= 10) return;
        // Retry after 5 seconds.
        setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000);
      },
    }
  );

  if (error) return "An error has occurred.";
  if (!data) return <span className={styles.loader}></span>;

  const apiData = data.data[0].value;

  const fearGreedIndex = [{ completed: apiData }];

  return (
    <div className={styles.container}>
      <Heading title="Crypto Fear and Greed Index" />
      {fearGreedIndex.map((item, idx) => (
        <ProgressBar key={idx} completed={item.completed} />
      ))}
    </div>
  );
};

export default Unconfirmed;
