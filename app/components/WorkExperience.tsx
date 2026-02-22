"use client"

import { motion, Variants } from "framer-motion";
import {sectionVariants, fadeUp, leftVariant, rightVariant} from "../lib/animations";
import styles from "../Layout.module.scss";

export default function WorkExperience(){
    return (
        <motion.div
  className={styles.WorkExperienceBigContainer}
  id="experience"
  variants={sectionVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
>
  <motion.h1 variants={fadeUp}>
    WORK & EXPERIENCE
  </motion.h1>

  <div className={styles.WorkExperienceContainer}>

    {/* EXPERIENCE 1 */}
    <motion.div className={styles.WorkExperience}>
      <motion.div
        className={styles.WorkExperienceText}
        variants={leftVariant}
      >
        <h2>Software Developer — REMAX WISE</h2>
        <h3>Remote | Lisbon, Portugal</h3>
        <ul>
          <li>Built and deployed a scalable real estate platform using Next.js and TypeScript</li>
          <li>Integrated AI assistant to streamline property-related interactions</li>
          <li>Implemented CMS-driven listings using Sanity</li>
          <li>Managed SEO optimization and deployment via Vercel</li>
        </ul>
      </motion.div>

      <motion.div
        className={styles.WorkExperienceImage}
        variants={rightVariant}
      >
        <img src="/images/remax.jpg" alt="Software Developer" />
      </motion.div>
    </motion.div>

    {/* EXPERIENCE 2 */}
    <motion.div className={styles.WorkExperience}>
      <motion.div
        className={styles.WorkExperienceText}
        variants={leftVariant}
      >
        <h2>Full-Stack Developer Intern — Eman Halıcılık</h2>
        <h3>Istanbul, Turkey</h3>
        <ul>
          <li>Developed and optimized WordPress and Magento e-commerce platforms</li>
          <li>Improved responsiveness and performance across multi-device environments</li>
          <li>Managed multi-marketplace integrations (Amazon, Trendyol)</li>
          <li>Applied SEO optimization strategies to increase visibility</li>
        </ul>
      </motion.div>

      <motion.div
        className={styles.WorkExperienceImage}
        variants={rightVariant}
      >
        <img src="/images/eman.jpeg" alt="Full-Stack Developer Intern" />
      </motion.div>
    </motion.div>

    {/* EXPERIENCE 3 */}
    <motion.div className={styles.WorkExperience}>
      <motion.div
        className={styles.WorkExperienceText}
        variants={leftVariant}
      >
        <h2>Application Developer Intern — Proceedit</h2>
        <h3>Remote | Barcelona, Spain</h3>
        <ul>
          <li>Built responsive mobile UI components using Flutter</li>
          <li>Developed backend scripts with Python</li>
          <li>Maintained PostgreSQL database structures</li>
          <li>Contributed to AWS-based deployment workflows</li>
        </ul>
      </motion.div>

      <motion.div
        className={styles.WorkExperienceImage}
        variants={rightVariant}
      >
        <img src="/images/proceedit.jpeg" alt="Application Developer Intern" />
      </motion.div>
    </motion.div>

  </div>
</motion.div>

    );
}