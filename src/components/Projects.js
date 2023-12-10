import React from "react";
import styles from "./Projects.module.css";
import cat from "../images/cat.png";
import { Link } from 'react-router-dom';
import playList from '../images/playList.png';
import todo from '../images/todo.png';
import netflix from '../images/netflix.png';
import gau from '../images/gau.png';
import frequently from '../images/frequently.png';
import code from '../images/code.png';
import calculator from '../images/calculator.png'
const Projects = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.head}>My Projects</h1>
     
      <div className={styles.flex}>

        <div className={styles.box}>
          <img className={styles.image} src={netflix} alt="" />
          <h1>NetFlix</h1>
          <p>
          Developed a basic Netflix-inspired first page using HTML and React CSS in a React project 
          </p>
          <p>
          Created the necessary HTML structure and applied CSS styles to replicate the Netflix UI, including the header, hero section, categories, and footer. 
          
          </p>
          {/* <p>
          Designed and implemented various sections, including informative content about cat behavior and captivating articles,  while ensuring seamless responsiveness across different screen sizes for a professional and user-friendly presentation.
          </p> */}
          <Link to="https://webclone-netflix.netlify.app/" target="_blank">
              <button className={styles.project} >Click Me</button>
           </Link>
        </div>
        <div className={styles.box}>
          <img className={styles.image} src={cat} alt="" />
          <h1>Cat Project</h1>
          <p>
            Developed a responsive website using HTML, CSS, and Bootstrap 5, showcasing a visually appealing design with features  like a dynamic navigation bar, image carousel, and article preview section for an engaging user experience.
          </p>
          <p>
          Designed and implemented various sections, including informative content about cat behavior and captivating articles,  while ensuring seamless responsiveness across different screen sizes for a professional and user-friendly presentation.
          </p>
          <Link to="https://eram-khan786.github.io/CatWebpage/" target="_blank">
              <button className={styles.project} >Click Me</button>
           </Link>
        </div>
        <div className={styles.box}>
          <img className={styles.image} src={playList} alt="" />
          <h1>Song PlayList</h1>
          <p>webpage displays songs by three artists with play buttons using HTML, CSS, and JavaScript.  </p>
          <p>JavaScript enables interactive audio control, allowing users to play and pause songs. </p>
          <Link to="https://eram-khan786.github.io/Song-Playlist/" target="_blank">
              <button className={styles.project} >Click Me</button>
           </Link>
        </div>
        <div className={styles.box}>
          <img className={styles.image} src={todo} alt="" />
          <h1>Todo List</h1>
          <p> it offers users an interactive list for adding, deleting, and clearing items. It includes icons for easy removal and a visually appealing design.</p>
          <p> Through visual elements and intuitive icons, users can interact with the dynamic list, simplifying task organization and interaction. </p>
          <Link to="https://stirring-tiramisu-106465.netlify.app/" target="_blank">
              <button className={styles.project} >Click Me</button>
           </Link>
        </div>
        <div className={styles.box}>
          <img className={styles.image} src={gau} alt="" />
          <h1>Gaurmet au Catering</h1>
          <p>Developed a React web application that utilized React Router for client-side routing. Implemented a user-friendly navigation system that allowed seamless transitions between different sections, including Main, Home, About, Menu, and Contact. Included error handling with a 'NotFound' component for unmatched routes, enhancing the overall user experience.</p>
          <Link to="https://bejewelled-gelato-ceeac4.netlify.app/" target="_blank">
              <button className={styles.project} >Click Me</button>
           </Link>
        </div>
        <div className={styles.box}>
          <img className={styles.image} src={frequently} alt=""/>
          <h1>FAQ</h1>
          <p>Developed an FAQ web page with an interactive design allowing users to expand and collapse answers by clicking on questions, enhancing user experience.</p>
          <Link to="https://eram-khan786.github.io/Frequently_Asked_Qusetion/" target="_blank">
              <button className={styles.project} >Click Me</button>
           </Link>
        </div><div className={styles.box}>
          <img className={styles.image} src={code} alt="" />
          <h1>Quote Generator</h1>
          <p>The page features dynamic content, offering random quotes and their authors to users upon clicking the "New Quotes" button. Integrated Google Fonts for enhanced typography and applied CSS for styling.</p>
          <Link to="https://eram-khan786.github.io/Code-Generator/" target="_blank">
              <button className={styles.project} >Click Me</button>
           </Link>
        </div><div className={styles.box}>
          <img className={styles.image} src={calculator} alt="" />
          <h1>Calculator</h1>
          <p>Developed a web-based calculator using HTML, CSS, and JavaScript, with support for keyboard input and button clicks. Implemented logic to handle mathematical operations, expression evaluation, and error handling, as well as support for backspace, Enter, and Clear keys, enhancing user functionality.</p>
          <Link to="https://eram-khan786.github.io/Calculator/" target="_blank">
              <button className={styles.project} >Click Me</button>
           </Link>
        </div>
  
      </div>
    </div>
  );
};

export default Projects;
