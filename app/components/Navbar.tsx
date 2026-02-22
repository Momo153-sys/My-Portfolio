"use client"

import Link from "next/link";
import styles from "../Layout.module.scss";

export default function Navbar(){
    return (
<div className={styles.NavbarbButtonContainer}>
      <a href="#projects" className={styles.Navbarbutton}>
      Projects
      </a>

      <a href="#experience" className={styles.Navbarbutton}>
        Experience
      </a>

      <a href="#skills" className={styles.Navbarbutton}>
        Skills
      </a>

      <a href="#contact" className={styles.Navbarbutton}>
        Contact
      </a>
    </div>

    );
}