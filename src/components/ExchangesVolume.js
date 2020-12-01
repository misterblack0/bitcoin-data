import useSWR from "swr";
import styles from "../../styles/ExchangesVolume.module.scss";
import Heading from "./Heading";
import { VictoryChart, VictoryTheme, VictoryBar, VictoryAxis } from "victory";

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

 /*  console.log(data[0].open_interest_btc); */

  const data1 = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000},
    {quarter: 5, earnings: 19000}
  ];

  return (
    <div className={styles.container}>
    <Heading title="OI BTC"/>
      
    <VictoryChart
    width={1500} height={300}
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={70}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 5"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar
          data={data1}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>

    </div>
  );
};

export default ExchangesVolume;
