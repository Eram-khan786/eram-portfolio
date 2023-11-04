import styles from './Home.module.css';
import React from 'react';
import image from '../images/eram.jpeg'; // Fix the import name
// import { Button } from 'react-scroll';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.body}>
    <div className={styles.flex}>
      <div className={styles.left}>
          <img className={styles.image} src={image} alt=""/>
      </div>
      <div className={styles.right}> 
          <h1>Hello, I</h1>
          <h1>am Eram Khan</h1>
          <p className={styles.para}>
             I always do my best in what I take, embodying dedication and a positive attitude as a web developer. I am a very positive person who loves learning new things, and I'm always ready to tackle problems, making continuous learning and creative problem-solving a vital part of my journey in the ever-evolving world of web development.
          </p>
         
           <Link to="https://drive.google.com/drive/folders/1wdlzMAq4TUef2fe6pCbHWNsSrPDOLbyk" target="_blank">
              <button className={styles.resume} >Resume</button>
           </Link>

          
      </div>
      
    </div>
    </div>
  );
}

export default Home;
