import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./HeaderMenu.module.scss";

const HeaderMenu = () => {
  const router = useRouter();
  return (
    <div className={styles.header_menu}>
      <nav>
        <ul>
          <li className={router.pathname == "/movies" ? styles.active : ""}>
            <Link href="/movies">
              <a>Home</a>
            </Link>
          </li>
          {/* <li
            className={router.pathname == "/tv-programmes" ? styles.active : ""}
          >
            <Link href="/tv-programmes">
              <a>Tv Programmes</a>
            </Link>
          </li> */}
          {/* <li className={router.pathname == "/genres" ? styles.active : ""}>
            <Link href="/genres">
              <a>Films</a>
            </Link>
          </li> */}
          {/* <li className={router.pathname == "/wishlist" ? styles.active : ""}>
            <Link href="/wishlist">
              <a>My List</a>
            </Link>
          </li> */}
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
      </nav>
    </div>
  );
};

export default HeaderMenu;