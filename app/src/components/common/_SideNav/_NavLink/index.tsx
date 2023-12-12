"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { NavLink } from "../types/nav";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

type NavlinkProps = {
    name: string;
    path: string;
    subPaths?: NavLink[];
};

const Navlink: React.FC<NavlinkProps> = ({ name, path, subPaths }) => {
    const [subPathsOpen, setSubPathsOpen] = useState(true);

    const toggleSubPaths = () => {
        setSubPathsOpen(!subPathsOpen);
    };

    return (
        <div className={styles.subLinks}>
            <div className={styles.container}>
                <Link href={path} className={styles.link}>
                    {name}
                </Link>
                {subPaths ? subPathsOpen ? <FaArrowAltCircleUp className={styles.subPathToggle} onClick={() => toggleSubPaths()} /> : <FaArrowAltCircleDown className={styles.subPathToggle} onClick={() => toggleSubPaths()} /> : null}
            </div>
            {subPaths && subPathsOpen && (
                <ul>
                    {subPaths.map((subPath, index) => (
                        <li key={index}>
                            <Link href={subPath.path} className={styles.link}>
                                {subPath.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navlink;
