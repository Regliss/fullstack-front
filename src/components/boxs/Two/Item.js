import React, { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./Two.module.scss";

const Item = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.two_item}>
      <button className={styles.two_item_header} onClick={() => setShow(!show)}>
        {props.two.header}
        {show ? (
          <Icon className={styles.icon} icon="clarity:close-line" />
        ) : (
          <Icon className={styles.icon} icon="fluent:add-28-regular" />
        )}
      </button>
      {show ? (
        <div className={styles.two_item_body}>{props.two.body}</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Item;