import React from "react";
import styles from "./One.module.scss";

const Item = (props) => {
  return (
    <div className={styles.one_item}>
      <div className={styles.one_item_text}>
        <h1 className={styles.one_title}>{props.one.title}</h1>
        <h2 className={styles.one_subtitle}>{props.one.subtitle}</h2>
      </div>
      <div className={styles.one_item_media}>
        <img
          className={styles.one_image}
          src={props.one.image.src}
          alt={props.one.image.alt}
        />
      </div>
    </div>
  );
};

export default Item;