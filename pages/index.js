import Fees from "../src/components/Fees";
import Mempool from "../src/components/Mempool";
import Blocks from "../src/components/Blocks";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Fees />
      <Mempool />
      <Blocks />
    </div>
  );
}
