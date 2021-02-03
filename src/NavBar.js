import React from 'react';
import styled from 'styled-components'

function NavBar() {
    return (
        <Container>
            <Tab>Contact</Tab>
            <Tab><BlogLink href="https://kevinpark-61806.medium.com/">Blogs</BlogLink></Tab>
            <Tab>Projects</Tab>
            <Tab>About</Tab>
        </Container>
    )
}

export default NavBar;

const Container = styled.div`
   width: 100%;
   height: 75px;
   margin-top: 2%;
   background-image: linear-gradient(to bottom left, #48BAA0, #26E6BA);
`
const BlogLink = styled.a`
    color: #EE4F08;
    text-decoration: none;
    opacity: 1.0;
`

const Tab = styled.h2`
    float: right;
    display: inline-block; 
    margin-right: 8%; 
    color: #EE4F08;
    font-family: simhei;
    opacity: 1.0;
`

// background-color: #0B4F95;
