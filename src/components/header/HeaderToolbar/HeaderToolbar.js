import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeaderToolbar.module.scss";

const HeaderToolbar = () => {
  const [token, setToken] = useState({});

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <div className={styles.header_toolbar}>
      {  token !== null && token !== undefined && token !== {} ? (
        <Image
          src="/pulic/images/account/accountImage.png"
          alt="Account image"
          width={52}
          height={32}
        />
      ) : (
        <Link href="/register">
          <a className={styles.header_toolbar_button}>Sign In</a>
        </Link>
      )}
    </div>
  );
};

export default HeaderToolbar;