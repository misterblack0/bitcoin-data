import styles from "../../styles/ProgressBar.module.scss";

export default function ProgressBar(props) {
  const { completed } = props;

  const fillerStyles = {
    width: `${completed}%`,
  };

  return (
    <div className={styles.container}>



      <div className={styles.filler} style={fillerStyles}>
        <span className={styles.label}>{`${completed}%`}</span>
      </div>
      </div>
 
  );
}
