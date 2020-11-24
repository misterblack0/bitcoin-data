import useSWR from "swr";
import styles from "../../styles/Mempool.module.scss";
import { VictoryChart, VictoryTheme, VictoryArea } from 'victory';

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

export default function Mempool() {
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

  const numberFormat = (num) => {
    const options = { maximumFractionDigits: 0 };
    return new Intl.NumberFormat("en-US", options).format(num);
  };

console.log(data);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Mempool Chart</h1>
      <div className={styles.chart}>





      <VictoryChart
  theme={VictoryTheme.material}
>


  <VictoryArea  
   style={{
      data: {
        fill: "#c43a31", fillOpacity: 0.7
      },
      labels: {
        fontSize: 15,
        fill: ({ datum }) => datum.x === 3 ? "#000000" : "#c43a31"
      }
    }}
    
    data={[
      { x: 1, y: 10 },
        { x: 2, y: 4 },
        { x: 3, y: 5 },
        { x: 4, y: 6 },
        { x: 5, y: 7 }
    ]}
  />

</VictoryChart>







      </div>
    </div>
  );
}
