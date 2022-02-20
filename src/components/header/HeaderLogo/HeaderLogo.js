import React from 'react';
import Image from "next/image";
import styles from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
    return (
      <div className={styles.header_logo}>
        <Image
          className={styles.header_logo_img}
          src="/netflix-logo.svg"
          alt="Netflix-Logo"
          width={108}
          height={32}
        />
      </div>
    );
  };

export default HeaderLogo;
