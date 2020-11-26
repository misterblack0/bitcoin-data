import useSWR from "swr";
import styles from "../../styles/FearGreed.module.scss";
import ProgressBar from "../components/ProgressBar";
import { VictoryPie, VictoryAnimation, VictoryLabel, VictoryAxis } from 'victory';

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

export default function Unconfirmed() {
  const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_FEARGREED, fetcher, {
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




  console.log(data.data[0].value)


  const apiData = data.data[0].value;


  const testData = [
    { bgcolor: "#6a1b9a", completed: apiData },
  ];





  const state = {
    percent: apiData, data: getData(93)
  };



  function getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
   
  }
  




  return (
    <div className={styles.container}>
    {/* 
    {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))} */}



      <div>
        <svg viewBox="0 0 400 400" width="50%" height="50%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400} height={400}
            data={state.data}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: { fill: ({ datum }) => {
                const color = datum.y > 30 ? "green" : "red";
                return datum.x === 1 ? color : "transparent";
              }
              }
            }}
          />
          <VictoryAnimation duration={1000} data={state}>
            {(newProps) => {
              return (
                <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={200} y={200}
                  text={Math.round(newProps.percent)}
                  style={{ fontSize: 45 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
      </div>

      
      
    </div>
  );
}
