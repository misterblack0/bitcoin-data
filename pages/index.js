import Header from "../src/components/Header";
import Fees from "../src/components/Fees";
import Mempool from "../src/components/Mempool";
/* import Blocks from "../src/components/Blocks"; */
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.gridContainer}>
      <Header />
      <div className={styles.wrapper}>
        <Fees />
        <Mempool />
        {/* <Blocks /> */}
      </div>
    </div>
  );
}
