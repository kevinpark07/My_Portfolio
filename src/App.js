import React from 'react';
import Header from './Header';
import About from './About';
import NavBar from './NavBar';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Header />
      <NavBar/>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
