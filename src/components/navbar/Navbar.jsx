import React, {useState} from 'react';
import './navbar.css';


const Navbar = () => {
    const [links, setLinks] = useState(['Intro', 'Projects', 'About', 'Socials'])

  return (
    <div className='navbar-container'>
        <h1><span id='letter'>J</span>Chuwy</h1>
        <div className='navbar-containter_link-container'>
            {links.map(navLink => 
            <li key={navLink} className= "nav-item">
                <a href={'#' + navLink} className='nav-link'>{navLink}</a>
            </li>
            )}
        </div>
    </div>
  )
}

export default Navbar