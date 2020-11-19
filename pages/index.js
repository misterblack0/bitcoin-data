import Header from "../src/components/Header";
import Fees from "../src/components/Fees";
import styles from "../styles/Home.module.scss";
import Unconfirmed from "../src/components/Unconfirmed";

export default function Home() {
  return (
    <div className={styles.gridContainer}>
      <Header />
      {/* <div className={styles.wrapper}> */}
      <div className={styles.fees}>
        <Fees />
      </div>
      <div className={styles.mempool}>mempool</div>
      <div className={styles.unconfirmed}>
        <Unconfirmed />
      </div>

      <div className={styles.blocks}>blocks</div>
    </div>
    /*   </div> */
  );
}
