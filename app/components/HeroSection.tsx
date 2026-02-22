"use client"

import { motion, Variants } from "framer-motion";
import {containerVariants, leftVariant, rightVariant} from "../lib/animations";
import styles from "../Layout.module.scss";

export default function HeroSection(){

    

    return (
        <motion.div
  className={styles.HeroContainer}
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
>
  <motion.div
    className={styles.HeroTextSection}
    variants={leftVariant}
  >
    <p>
      Hello! my name is Mohamed Doumbia. I’m a Computer Engineering student
      building production-ready web platforms, intelligent AI experiences,
      and data-driven solutions.
    </p>

    <div className={styles.HeroButtonContainer}>
      <a href="#projects" className={styles.btnSmall}>
        Browse my builds
      </a>
    </div>
  </motion.div>

  <motion.div
    className={styles.HeroImageSection}
    variants={rightVariant}
  >
    <img
      src="/images/portfolio-profile.webp"
      alt="Portfolio Profile Picture"
    />
  </motion.div>
</motion.div>
        
    );
}