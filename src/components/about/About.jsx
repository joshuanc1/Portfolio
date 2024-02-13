import React, {useRef, useEffect, useState} from 'react'
import './about.css';
import { useSlideInScreen } from '../../hooks/useSlideInScreen';
import excelIcon from '../../assets/excel.png';
import tableuaIcon from '../../assets/tableua.png';



const About = ({htmlIcon, cssIcon, jsIcon, reactIcon, javaIcon, postgresSqlIcon}) => {
  const techIcon = [htmlIcon, cssIcon, jsIcon, reactIcon, javaIcon, postgresSqlIcon, excelIcon, tableuaIcon];
  
  const myRef = useRef();
  const isVisible = useSlideInScreen(myRef, {});
 

  
 

  return (
    <div id="About" className="about-container">
      <div className='about-me'>
        <h3>About Me</h3>
        <h4>A Developer that loves to learn new technologies!</h4>
        <p>I'm in the middle of a career change from being a Doctor of Physical Therapy to Data Analyst! I always loved solving difficult problems, but now instead of the human body, I will solve them online.</p>
        <p>Other than coding, I spend my free time writing Fantasy novels, drawing, playing video games / D&#38;D, and anything to do with japanese culture!</p>
      </div>
      <div className='about-tools' ref={myRef}>
        <h3>Tech Stack</h3>
        {techIcon.map(icon => <img key={icon} className={isVisible ? "about-tech-show": "about-tech"} src={icon} alt={icon.toString()}></img>)}
      </div>
    </div>
  )
}

export default About