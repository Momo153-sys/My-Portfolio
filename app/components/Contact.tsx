"use client"

import { motion, Variants } from "framer-motion";
import {sectionVariants, fadeUp, iconVariant} from "../lib/animations";
import styles from "../Layout.module.scss";

export default function Contact(){
    return(
        <motion.div
        className={styles.ContactSectionBigContainer}
        id="contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 variants={fadeUp}>
          Let’s Connect — Get to Know My Work
        </motion.h1>
      
        <div className={styles.ContactLinksContainer}>
      
          <motion.div className={styles.ContactLink} variants={iconVariant}>
            <a href="https://github.com/Momo153-sys" target="_blank" rel="noopener noreferrer">
              <img src="/images/github-icon.svg" alt="GitHub" />
            </a>
          </motion.div>
      
          <motion.div className={styles.ContactLink} variants={iconVariant}>
            <a href="https://www.linkedin.com/in/mohamed-samba-doumbia-136072238/" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin-icon.svg" alt="LinkedIn" />
            </a>
          </motion.div>
      
          <motion.div className={styles.ContactLink} variants={iconVariant}>
            <a href="https://wa.me/905366347780" target="_blank" rel="noopener noreferrer">
              <img src="/images/whatsapp-icon.svg" alt="WhatsApp" />
            </a>
          </motion.div>
      
          <motion.div className={styles.ContactLink} variants={iconVariant}>
            <a href="mailto:mohameddoum2000@gmail.com">
              <img src="/images/email-icon.svg" alt="Email" />
            </a>
          </motion.div>
      
          <motion.div className={styles.ContactLink} variants={iconVariant}>
            <a
              href="/documents/Mohamed_Doumbia_CV_Revised.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/cv-icon.svg" alt="Download CV" />
            </a>
          </motion.div>
      
        </div>
        <br />
        <br />
        <br />
        <br />
      </motion.div>
    );
}