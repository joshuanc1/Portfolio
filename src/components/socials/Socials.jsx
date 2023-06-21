import React, {useState, useRef} from 'react';
import './socials.css';
import linkedlnIcon from '../../assets/linkedlnIcon.png';
import githubIcon from '../../assets/githubIconn.png';
import Email from '../email/Email';

const Socials = () => {
  const [socialLinks, setSocialLinks] = useState([
    {name: "github.com/joshuanc1", icon: githubIcon, link: "https://github.com/joshuanc1"},
    {name: "in/joshua-chu-n", icon: linkedlnIcon, link: "https://www.linkedin.com/in/joshua-chu-n/"},
  ])
  const myRef = useRef();
  const [connect, setConnect] = useState(false);

  

  const handleConnect = () => {
    setConnect(connect ? false : true);

  }

  return (
    <div id="Socials" className='socials_container'>
      <div className='socials_container-inner'>
        <h3>Find me on:</h3>
        <div className='socials_container-links-container-outer'>
          {socialLinks.map(link => 
              <a key={link} className="link" target="blank" href={link.link}>
                <img  className="icon-img" src={link.icon} alt="link-image" />
                <p>{link.name}</p>
              </a>
          )}
        </div>
        <button className='social-button' onClick={handleConnect}>Let's Connect!</button>
      </div>
    {connect ?

    <Email handleConnect={handleConnect}></Email> : null}

    </div>
  )
}

export default Socials