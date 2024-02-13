import React, {useRef} from 'react'
import './projects.css';
import WriterRoad from '../../assets/WriterRoad.png';
import { useSlideInScreen } from '../../hooks/useSlideInScreen';
import excelIcon from '../../assets/excel.png';
import tableuaIcon from '../../assets/tableua.png';
import salesDashboard from '../../assets/salesDashboard.png';



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

      <div className={'storm_outer_container'}>
        <div className='storm_info'>
          <a className='storm_link' href="https://public.tableau.com/shared/NNZNDM32B?:display_count=n&:origin=viz_share_link" target="blank">
            Tableua Public Full View
          </a>
          <div className='storm_text'>
            USA Disaster Tracker is a Tableua Dashboard keeping track of major storms, incident rates, along with average population to determine whether there is a positive correlation between the storm incident rate to the increase in population for each state.
          </div>
          <div className='storm_stack'>
            Stack: 
            <img src={excelIcon} alt="excel" style={{width:40, height: 40}} />
            <img src={tableuaIcon} alt="tableua" style={{width: 40, height: 40}}/>

          </div>

        </div>
        <div className='storm_container'>

          <iframe className='storm_dashboard' src="https://public.tableau.com/shared/NNZNDM32B?:showAppBanner=false&:showVizHome=no&:embed=true&:origin=viz_share_link" height='800' width={500} frameborder="0"></iframe>
        </div>
      </div>

      <div className='salesdashboard_outer_container'>
        <div className='salesdashboard_container'>
            <img src={salesDashboard} alt="salesDashboard" width="800" height="400"/>
        </div>
        <div className='sales_info_container'>
          <div>Excel Sales Dashboard</div>
          <div>Sales Dashboard analysing trends between item categories, sales, discounts, and returns between the year 2017 - 2019</div>
          <div>Stack: 
            <img src={excelIcon} alt="excel" style={{width:40, height: 40}} />
          </div>
        </div>
      </div>

      <h2 className='project_container-header'>  More Projects in progress... </h2>

    </div>
  )
}

export default Projects