import React, {lazy, Suspense} from 'react'
import htmlIcon from './assets/html.png'
import cssIcon from './assets/css-3.png';
import jsIcon from './assets/js.png';
import reactIcon from './assets/science.png';
import javaIcon from './assets/java.png';
import postgresSqlIcon from './assets/postgre.png';
import './App.css';
const Navbar = lazy(()=>import('./components/navbar/Navbar'));
const Intro = lazy(()=>import('./components/intro/Intro'));
const Projects = lazy(()=>import('./components/projects/Projects'));
const Socials = lazy(()=>import('./components/socials/Socials'));
const About = lazy(()=>import('./components/about/About'));

const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Still loading...</h1>}>
      
          <Navbar />
          <Intro />
          <Projects htmlIcon={htmlIcon} cssIcon={cssIcon} jsIcon={jsIcon} reactIcon={reactIcon} />
          <About htmlIcon={htmlIcon} cssIcon={cssIcon} jsIcon={jsIcon} reactIcon={reactIcon} javaIcon={javaIcon} postgresSqlIcon={postgresSqlIcon}/>
          <Socials />
      
      </Suspense>
    </>
  )
}

export default App