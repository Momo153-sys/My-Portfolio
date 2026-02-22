"use client"

import { motion, Variants } from "framer-motion";
import {sectionVariants, fadeUp, skillCard} from "../lib/animations";
import styles from "../Layout.module.scss";

export default function TechnicalSkills(){
    return (
        <motion.div
  className={styles.TechnicalSkillsBigContainer}
  id="skills"
  variants={sectionVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
>
  <motion.h1 variants={fadeUp}>
    Technical Skills
  </motion.h1>

  <div className={styles.TechnicalSkillsContainer}>

    <motion.div className={styles.TechnicalSkill} variants={skillCard}>
      <div className={styles.SkillTitle}>Programming Languages</div>
      <div className={styles.Skills}>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>C++</li>
          <li>Java</li>
        </ul>
      </div>
    </motion.div>

    <motion.div className={styles.TechnicalSkill} variants={skillCard}>
      <div className={styles.SkillTitle}>Frontend Development</div>
      <div className={styles.Skills}>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>Vue</li>
          <li>Flutter</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </motion.div>

    <motion.div className={styles.TechnicalSkill} variants={skillCard}>
      <div className={styles.SkillTitle}>Backend Development</div>
      <div className={styles.Skills}>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>REST APIs</li>
        </ul>
      </div>
    </motion.div>

    <motion.div className={styles.TechnicalSkill} variants={skillCard}>
      <div className={styles.SkillTitle}>Databases</div>
      <div className={styles.Skills}>
        <ul>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>
      </div>
    </motion.div>

    <motion.div className={styles.TechnicalSkill} variants={skillCard}>
      <div className={styles.SkillTitle}>Cloud & Deployment</div>
      <div className={styles.Skills}>
        <ul>
          <li>AWS</li>
          <li>Vercel</li>
        </ul>
      </div>
    </motion.div>

    <motion.div className={styles.TechnicalSkill} variants={skillCard}>
      <div className={styles.SkillTitle}>Data & Analytics</div>
      <div className={styles.Skills}>
        <ul>
          <li>Python (Pandas, NumPy)</li>
          <li>Data Preprocessing</li>
          <li>Microsoft Excel</li>
          <li>Tableau</li>
          <li>Model Evaluation</li>
          <li>Basic Predictive Modeling</li>
        </ul>
      </div>
    </motion.div>

    <motion.div className={styles.TechnicalSkill} variants={skillCard}>
      <div className={styles.SkillTitle}>AI & Systems</div>
      <div className={styles.Skills}>
        <ul>
          <li>NLP</li>
          <li>Arduino</li>
          <li>Microcontroller Programming</li>
          <li>Deep Neural Networks</li>
        </ul>
      </div>
    </motion.div>

  </div>
</motion.div>
    );

}