import React from 'react';
import styled from 'styled-components'

function NavBar() {
    return (
        <Container>
            <Tab>Contact</Tab>
            <Tab>Blogs</Tab>
            <Tab>Projects</Tab>
            <Tab>About</Tab>
        </Container>
    )
}

export default NavBar;

const Container = styled.div`
   width: 100%;
   margin-bottom: 10%;
   margin-top: 2%;
`
const Tab = styled.h2`
    float: right;
    display: inline-block; 
    margin-right: 8%; 
`