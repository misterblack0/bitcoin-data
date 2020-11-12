import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    async function loadData() {
      const response = await fetch(process.env.NEXT_PUBLIC_API);
      const fetchedData = await response.json();
      setData(fetchedData);
    }
    loadData();
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  console.log(data);
  return (
    <div>
      <div>Fastest fee: {data.fastestFee}</div>
      <div>Half hour fee: {data.halfHourFee}</div>
      <div>Hour fee: {data.hourFee}</div>
    </div>
  );
}

/* Home.getInitialProps = async () => {
  const response = await fetch("https://mempool.space/api/v1/fees/recommended");
  const fetchedData = await response.json();
  return {data: fetchedData};
};
 */
