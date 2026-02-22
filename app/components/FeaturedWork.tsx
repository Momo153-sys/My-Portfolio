"use client"

import { motion, Variants } from "framer-motion";
import {sectionVariants, fadeUp, leftVariant, rightVariant} from "../lib/animations";
import styles from "../Layout.module.scss";

export default function FeaturedWork(){



    return (
        <motion.div
  className={styles.FeaturedWorkBigContainer}
  id="projects"
  variants={sectionVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
>
  <motion.h1 variants={fadeUp}>Featured Work</motion.h1>

  <div className={styles.FeaturedWorkContainer}>
    
    {/* PROJECT 1 */}
    <motion.div className={styles.FeaturedWork}>
      <motion.div
        className={styles.FeaturedWorkText}
        variants={leftVariant}
      >
        <h2>REMAX WISE — AI-Integrated Real Estate Platform</h2>
        <h3>Next.js · TypeScript · Sanity · Vercel</h3>
        <p>
          Delivered a production-ready real estate platform with dynamic property listings and an AI-powered assistant to automate user inquiries.
        </p>
      </motion.div>

      <motion.div
        className={styles.FeaturedWorkImage}
        variants={rightVariant}
      >
        <img src="/images/remax.jpg" alt="AI-Integrated Real Estate Platform" />
      </motion.div>
    </motion.div>

    {/* PROJECT 2 */}
    <motion.div className={styles.FeaturedWork}>
      <motion.div
        className={styles.FeaturedWorkText}
        variants={leftVariant}
      >
        <h2>Full-Stack E-Commerce Application</h2>
        <h3>Node.js · Express · MongoDB · REST APIs</h3>
        <p>
          Developed a secure full-stack application implementing authentication and scalable API architecture.
        </p>
      </motion.div>

      <motion.div
        className={styles.FeaturedWorkImage}
        variants={rightVariant}
      >
        <img src="/images/shop.jpg" alt="E-Commerce Web Application" />
      </motion.div>
    </motion.div>

    {/* PROJECT 3 */}
    <motion.div className={styles.FeaturedWork}>
      <motion.div
        className={styles.FeaturedWorkText}
        variants={leftVariant}
      >
        <h2>Voice-Controlled Tri-Rotor Drone</h2>
        <h3>Arduino · Embedded Systems · Bluetooth · Real-Time Control</h3>
        <p>
          Engineered a tri-rotor drone with voice-command control and real-time motor stabilization.
        </p>
      </motion.div>

      <motion.div
        className={styles.FeaturedWorkImage}
        variants={rightVariant}
      >
        <img src="/images/arduino-drone.webp" alt="Voice-Controlled Drone" />
      </motion.div>
    </motion.div>

    {/* PROJECT 4 */}
    <motion.div className={styles.FeaturedWork}>
      <motion.div
        className={styles.FeaturedWorkText}
        variants={leftVariant}
      >
        <h2>AI-Based Sentiment Analysis System</h2>
        <h3>Python · NLP · Data Processing</h3>
        <p>
          Built a sentiment classification system using preprocessing pipelines and model-based analysis.
        </p>
      </motion.div>

      <motion.div
        className={styles.FeaturedWorkImage}
        variants={rightVariant}
      >
        <img src="/images/sentiment.jpg" alt="Sentiment Analysis Project" />
      </motion.div>
    </motion.div>

  </div>
</motion.div>
    );
}