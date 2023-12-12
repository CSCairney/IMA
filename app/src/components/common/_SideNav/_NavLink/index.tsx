import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

type NavlinkProps = {
    name: string;
    path: string;
    subPaths?: [];
};

const Navlink:React.FC<NavlinkProps> = ({name, path}) => {

    return (
        <div className={styles.Navlink}>
            <Link href={path}>
                {name}
            </Link>
        </div>
    );
}

export default Navlink;
