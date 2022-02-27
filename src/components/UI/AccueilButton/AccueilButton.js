import styles from "./AccueilButton.module.scss";

const AccueilButton = (props) => {
  return (
    <button
      className={styles.form_button}
      type="submit"
      autoComplete="off"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default AccueilButton;