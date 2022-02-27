import styles from "./AccueilTitle.module.scss";

const AccueilTitle = (props) => {
  return <h1 className={styles.form_title}>{props.title}</h1>;
};

export default AccueilTitle;