import styles from "./Zero.module.scss";

const Zero = () => {
    return <div className={styles.zero}>
        <h1 className={`${styles.zero_title} ${styles.zero_title_h1}`}>Unlimited movies, TV shows, and more.</h1>
        <h2 className={`${styles.zero_title} ${styles.zero_title_h2}`}>Watch anywhere. Cancel anytime.</h2>
        <h4 className={`${styles.zero_title} ${styles.zero_title_h3}`}>Ready to watch? Enter your email to create or restart your membership.</h4>
    </div>
};

export default Zero;