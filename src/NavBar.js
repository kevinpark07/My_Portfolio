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
   width: 100.5%;
   height: 75px;
`
const Link = styled.a`
    color: black;
    text-decoration: none;
`

const Tab = styled.h2`
    float: right;
    display: inline-block; 
    margin-right: 8%; 
    font-family: American Typewriter;
    opacity: 1.0;
    text-decoration: underline;
`

// background-color: #0B4F95;
