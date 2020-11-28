import styles from "../../styles/Header.module.scss";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
