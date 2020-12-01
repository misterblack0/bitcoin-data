import ExchangesVolume from "../src/components/ExchangesVolume";
import styles from "../styles/Graphs.module.scss";

export default function Graphs() {
  return (
    <div className={styles.gridContainer}>
      <ExchangesVolume/>
    </div>
  );
}
