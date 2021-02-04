import React from 'react';
import Header from './Header';
import About from './About';
import NavBar from './NavBar';
import Projects from './Projects';
import Contact from './Contact';
import ProfileImage from './ProfileImage';

function App() {
  return (
    <>
      {/* <Header /> */}
      <NavBar/>
      <ProfileImage />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
