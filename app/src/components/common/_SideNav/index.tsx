import React from "react";
import styles from "./styles.module.scss";
import { links } from "./_constants/links";
import Navlink from "./_NavLink";

const SideNav = () => {

    return (
        <div className={styles.sideNav}>
            <div className={styles.sideNav__branding}>
                <h1>SideNav</h1>
            </div>
            <div className={styles.sideNav__links}>
                {links.map((link, index) => (
                    <Navlink key={index} name={link.name} path={link.path} />
                ))}
            </div>
        </div>
    );
}

export default SideNav;
