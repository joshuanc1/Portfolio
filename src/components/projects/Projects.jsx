import React, {useRef} from 'react'
import './projects.css';
import WriterRoad from '../../assets/WriterRoad.png';
import { useSlideInScreen } from '../../hooks/useSlideInScreen';


const Projects = ({htmlIcon, cssIcon, reactIcon, jsIcon}) => {
  const writerRef = useRef();
 const writerRoadStack = [htmlIcon, cssIcon, reactIcon, jsIcon]
 const isVisible = useSlideInScreen(writerRef, {});
  return (
    <div id="Projects" className="project_container" ref={writerRef}>

      <div className={`Writer_Road ${isVisible ? "show" : ""}`} >
        <div className='writer_road-img'>
          <img src={WriterRoad} style={{width: 450, height: 300}} alt="WriterRoad" />
        </div>
        <div className='Writer_Road-info'>
          <div className='Writer_Road-links'>
            <a href="https://github.com/joshuanc1/WritersRoad" target="blank">
              Github
            </a>
            <a href="http://writersroad.online/">
              writersroad.online
            </a>

          </div>
          <div>
            Writer's Road is Full-Stack React book application making API calls to openlibrary, allowing users to log in, add books to their own library, and review the books they love to read.
          </div>
          <div className='Writer_Road-stack'>
            <div> Stack: </div>
            {writerRoadStack.map(icon => {
              return <img src={icon} alt={icon} style={{width: 25, height: 25}}/>
            })}
          </div>
        </div>
      </div>
      

      <h2 className='project_container-header'>  More Projects in progress... </h2>

    </div>
  )
}

export default Projects