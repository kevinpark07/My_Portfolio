import React from 'react';
import styled from 'styled-components'

function NavBar() {
    return (
        <Container>
            <Tab><Link href="#contact_section">Contact</Link></Tab>
            <Tab><Link href="https://kevinpark-61806.medium.com/">Blogs</Link></Tab>
            <Tab><Link href="#projects_section">Projects</Link></Tab>
            <Tab><Link href="#about_section">About</Link></Tab>
        </Container>
    )
}

export default NavBar;

const Container = styled.div`
   width: 100.5%;
   height: 75px;
   background-image: linear-gradient(to bottom left, #48BAA0, #26E6BA);

`
const Link = styled.a`
    color: #EE4F08;
    text-decoration: none;
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
