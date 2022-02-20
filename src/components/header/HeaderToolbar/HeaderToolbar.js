import React from 'react';
import Link from "next/link";
import styles from "./HeaderToolbar.module.scss";

const HeaderToolbar = () => {
    return (
      <div className={styles.header_toolbar}>
        <Link href="/login" >
          <a className={styles.header_toolbar_button}>Sign In</a>
        </Link>
      </div>
    );
  };

export default HeaderToolbar;