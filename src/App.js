import React from 'react';
import styled from 'styled-components';
import About from './About';
import NavBar from './NavBar';
import Projects from './Projects';
import Contact from './Contact';
import ProfileImage from './ProfileImage';

function App() {
  return (
    <Background>
      <Container>
        <NavBar />
        <ProfileImage />
        <About />
      </Container>
      <SecondContainer>
        <Projects />
        <Contact />
      </SecondContainer>
     </Background> 
  );
}

export default App;

const Background = styled.div`
  background-color: black;
`

const Container = styled.div`
  background-image: url(https://images.unsplash.com/photo-1590816911047-a9c8d310a393?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80);
  background-size: 100% 100%;
`
const SecondContainer = styled.div`
  background-image: url(https://images.unsplash.com/photo-1562710057-b3a85fa9ba85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80);
  background-size: 100% 100%;
`

// background-image: url(https://images.unsplash.com/photo-1513941025786-ed97f054ebba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80);
// https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80