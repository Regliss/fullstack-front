import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./HeaderMenu.module.scss";
import React, { useState, useEffect } from "react";

const HeaderMenu = () => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin"));
  });

  return (
    <div className={styles.header_menu}>
      <nav>
        <ul>
          <li className={router.pathname == "/movies" ? styles.active : ""}>
            <Link href="/movies">
              <a>Home</a>
            </Link>
          </li>
          {  isAdmin !== null && isAdmin !== undefined && isAdmin !== {} && isAdmin !== false ? (
            <ul>
            <li className={router.pathname == "/userAdmin" ? styles.active : ""}>
            <Link href="/userAdmin">
              <a>User Admin</a>
            </Link>
          </li>
          <li className={router.pathname == "/productAdmin" ? styles.active : ""}>
            <Link href="/productAdmin">
              <a>Product Admin</a>
            </Link>
          </li>
          <li className={router.pathname == "/genreAdmin" ? styles.active : ""}>
            <Link href="/genreAdmin">
              <a>Genre Admin</a>
            </Link>
          </li>
          </ul>
          ) : (
            <></>
          )}
          {/* <li className={router.pathname == "/userAdmin" ? styles.active : ""}>
            <Link href="/userAdmin">
              <a>User Admin</a>
            </Link>
          </li>
          <li className={router.pathname == "/productAdmin" ? styles.active : ""}>
            <Link href="/productAdmin">
              <a>Product Admin</a>
            </Link>
          </li>
          <li className={router.pathname == "/genreAdmin" ? styles.active : ""}>
            <Link href="/genreAdmin">
              <a>Genre Admin</a>
            </Link>
          </li> */}
          {/* ) : (
            <></>
          )} */}
          
          
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;