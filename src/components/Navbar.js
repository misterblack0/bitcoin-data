import Link from "next/link";
import styles from "../../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            <a className={styles.link}>Overview</a>
          </Link>
        </li>
        <li>
          <Link href="/blocks">
            <a className={styles.link}>Blocks</a>
          </Link>
        </li>
        <li>
          <Link href="/graphs">
            <a className={styles.link}>Graphs</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
