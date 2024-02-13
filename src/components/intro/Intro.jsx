import React, {useState} from 'react'
import './intro.css';
import cloudArt from '../../assets/profile.jpg';

const Intro = () => {
  const [roles, setRoles] = useState(["Full-stack Web Developer", "Data Analyst", "React-Learner", "Looking for work", "Full-stack Web Developer"]);

  return (
    <div id="Intro" className='intro-container'>
      <div className='intro-container_introduction'>
        <h2>Hi, my name is <span className='myName'>Joshua Chu</span></h2>
        <div className='role-wrapper'>
        {roles.map(role => <p key={role} className='role'>{role}</p>)}
        </div>
      </div>
      <div className="intro-container_profile-pic">
        <img className="cloudart" src={cloudArt} alt="cloudWord" />
      </div>
    </div>
  )
}

export default Intro