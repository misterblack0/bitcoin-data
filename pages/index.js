import Header from "../src/components/Header";
import Fees from "../src/components/Fees";
import Mempool from "../src/components/Mempool";
import Unconfirmed from "../src/components/Unconfirmed";
import Blocks from "../src/components/Blocks";
import FearGreed from "../src/components/FearGreed";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.feesContainer}>
        <Fees />
      </div>
      <div className={styles.mempoolContainer}>
        <Mempool />
      </div>
      <div className={styles.unconfirmedContainer}>
        <Unconfirmed />
      </div>
      <div className={styles.blocksContainer}>
        <Blocks />
      </div>
      <div className={styles.fearGreedContainer}>
        <FearGreed />
      </div>
    </div>
  );
}
