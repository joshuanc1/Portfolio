import React from 'react'
import './projects.css';
import WriterRoad from '../../assets/WriterRoad.png';


const Projects = ({htmlIcon, cssIcon, reactIcon, jsIcon}) => {
 const writerRoadStack = [htmlIcon, cssIcon, reactIcon, jsIcon]
  return (
    <div id="Projects" className="project_container">

      <div className='Writer_Road'>
        <img src={WriterRoad} style={{width: 300, height: 300}} alt="WriterRoad" />
        <div className='Writer_Road-info'>
          <div className='Writer_Road-links'>
            <a href="https://github.com/joshuanc1/WritersRoad" target="blank">
              Github
            </a>
            <a href="">
              Website
            </a>

          </div>
          Writer's Road is Full-Stack React book application making API calls to openlibrary, allowing users to log in, add books to their own library, and review the books they love to read.
          <div className='Writer_Road-stack'>
            <div> Stack: </div>
            {writerRoadStack.map(icon => {
              return <img src={icon} alt={icon} style={{width: 25, height: 25}}/>
            })}
          </div>
        </div>
      </div>


      <h2 className='project_container-header'> Projects in progress... </h2>

    </div>
  )
}

export default Projects