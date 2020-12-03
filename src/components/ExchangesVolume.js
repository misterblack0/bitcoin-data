import useSWR from "swr";
import styles from "../../styles/ExchangesVolume.module.scss";
import Heading from "./Heading";
import { VictoryChart, VictoryTheme, VictoryBar, VictoryAxis } from "victory";
import { fetcher } from "./fetcher";

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

/* const binanceData = data[0].open_interest_btc;
const okexData = data[1].open_interest_btc;
const huobiData = data[3].open_interest_btc;
const bybitData = data[4].open_interest_btc;
const bitmexData = data[5].open_interest_btc;
const ftxData = data[6].open_interest_btc;
const deribitData = data[7].open_interest_btc;
const bitfinexData = data[12].open_interest_btc;
const phemexData = data[18].open_interest_btc;
const krakenData = data[21].open_interest_btc; */

  const data1 = [
    {quarter: 1, earnings: 1000},
    {quarter: 2, earnings: 2000},
    {quarter: 3, earnings: 3000},
    {quarter: 4, earnings: 4000},
    {quarter: 5, earnings: 5000}
  ];

  return (
    <div className={styles.container}>
    <Heading title="OI BTC"/>
      
    <VictoryChart
    width={1200} height={300}
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={70}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={["Binance", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 5"]}
        />
        <VictoryAxis

style={{
   
    opacity: 0.4,
}}
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k BTC`)}
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
