import styles from "../../styles/ProgressBar.module.scss";

const ProgressBar = ({ completed }) => {
  const fillerStyles = {
    width: `${completed}%`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.filler} style={fillerStyles}>
        <span className={styles.label}>{`${completed}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
