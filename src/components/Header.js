import styles from "../../styles/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
    <div className={styles.logo}><h1>Logo</h1></div>
      <div className={styles.navbar}>
          
          <a href="#" className={styles.link}>Overview</a>
          <a href="#" className={styles.link}>Blocks</a>
          <a href="#" className={styles.link}>Graphs</a>
      </div>
    </div>
  );
}
