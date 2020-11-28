import { VictoryChart, VictoryTheme, VictoryArea, VictoryAxis } from "victory";

const MempoolChart = () => {
  return (
    <VictoryChart width={2000} height={450} theme={VictoryTheme.material}>
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[2.11, 3.9, 6.1, 8.05]}
        tickFormat={(t) => `${Math.round(t)}k`}
      />
      <VictoryAxis
        dependentAxis
        // tickFormat specifies how ticks should be displayed
        tickFormat={(x) => `$${x / 1000}k`}
      />

      <VictoryArea
        style={{
          data: {
            fill: "#c43a31",
            fillOpacity: 0.7,
          },
        }}
        data={[
          { x: 1, y: 10 },
          { x: 2, y: 4 },
          { x: 3, y: 5 },
          { x: 4, y: 6 },
          { x: 5, y: 7 },
        ]}
      />
    </VictoryChart>
  );
};

export default MempoolChart;
