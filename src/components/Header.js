import Link from 'next/link'
import styles from "../../styles/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
    <div className={styles.logo}><h1>Logo</h1></div>
      <div className={styles.navbar}>
      <ul>
      <li>
        <Link href="/">
          <a>Overview</a>
        </Link>
      </li>
      <li>
        <Link href="/blocks">
          <a>Blocks</a>
        </Link>
      </li>
      <li>
        <Link href="/graphs">
          <a>Graphs</a>
        </Link>
      </li>
    </ul>
      </div>
    </div>
  );
}
