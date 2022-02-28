import React from 'react';
import HeaderLogo from '../header/HeaderLogo/HeaderLogo';
import HeaderMenu from '../header/HeaderMenu/HeaderMenu';
import HeaderToolbar from '../header/HeaderToolbar/HeaderToolbar';
import Footer from '../footer/Footer';
import styles from "./MainLayout.module.scss";
import { useRouter } from "next/router";


const MainLayout = ({children}) => {
    const router = useRouter();
    return (
        <>
            <header className={styles.header_main}>
                <HeaderLogo />
                {router.pathname == "/register" || router.pathname == "/step3" || router.pathname == "/" ? <></> : <HeaderMenu />}
                <HeaderToolbar/>
            </header>
            <main>
                <div>
                    {children}
                </div>
            </main>
        </>
    );
}

export default MainLayout;