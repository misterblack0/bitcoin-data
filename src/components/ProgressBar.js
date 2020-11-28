import styles from "../../styles/ProgressBar.module.scss";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#6a1b9a",
    borderRadius: "inherit",
    transition: "width 1s ease-in-out",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  };

  return (
    <div className={styles.container}>
      <div style={fillerStyles}>
        <span className={styles.label}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
