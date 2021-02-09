import React from 'react';
import styled from 'styled-components';
import About from './About';
import NavBar from './NavBar';
import Projects from './Projects';
import Contact from './Contact';
import ProfileImage from './ProfileImage';

function App() {
  return (
    <Container>
      <NavBar />
      <ProfileImage />
      <About />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-image: url(https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80);
`

