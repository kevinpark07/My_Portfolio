import React from 'react';
import styled from 'styled-components'

function NavBar() {
    return (
        <Container>
            <Tab><Link href="#contact_section">Contact</Link></Tab>
            <Tab><Link href="https://kevinpark-61806.medium.com/">Blog</Link></Tab>
            <Tab><Link href="#projects_section">Projects</Link></Tab>
            <Tab><Link href="#about_section">About</Link></Tab>
        </Container>
    )
}

export default NavBar;

const Container = styled.div`
    width: 100%;
   height: 75px;
   top: 0%;
`

const Link = styled.a`
    color: white;
    text-shadow: 2px 2px black;
    text-decoration: none;
    font-size: 23pt;
`

const Tab = styled.h2`
    float: right;
    display: inline-block; 
    margin-right: 8%; 
    font-family: American Typewriter;
    opacity: 1.0;
`

// background-color: #0B4F95;
