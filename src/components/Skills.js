import React from 'react';
import styles from './Skills.module.css';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import python from '../images/python.png';
import c from '../images/c.png';
import react from '../images/react.png';
import mysql from '../images/mySQL.png'; // Correct the image source
import bootstrap from '../images/boo.png';


const Skills = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>My Skills</h1>

      <div className={styles.margin}>      
        <div className={styles.flex}>
          <div className={styles.box}>
            <img className={styles.image} src={html} alt=""/>
            <p>HTML</p>
          </div>
          <div className={styles.box}>
            <img className={styles.image} src={css} alt=""/>
            <p>CSS</p>
          </div>
          <div className={styles.box}>
            <img className={styles.image} src={javascript} alt=""/>
            <p>Javascript</p>
          </div>
          <div className={styles.box}>
            <img className={styles.image} src={react} alt=""/>
            <p>React</p>
          </div>
          <div className={styles.box}>
            <img className={styles.image} src={bootstrap} alt=""/>
            <p>Bootstrap</p>
          </div>
          <div className={styles.box}>
            <img className={styles.image} src={python} alt=""/>
            <p>Python</p>
          </div>
          <div className={styles.box}>
            <img className={styles.image} src={c} alt=""/>
            <p>C</p>
          </div>
          <div className={styles.box}>
            <img className={styles.image} src={mysql} alt=""/>
            <p>MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
