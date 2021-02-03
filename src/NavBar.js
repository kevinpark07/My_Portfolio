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
    position: sticky;
    top: 0;
   width: 100%;
   height: 75px;
   margin-top: 2%;
   background-image: linear-gradient(to bottom left, #0B0C0D, #595C61);
   opacity: 1;
`
const BlogLink = styled.a`
    color: white;
    text-decoration: none;
    opacity: 1;
`

const Tab = styled.h2`
    float: right;
    display: inline-block; 
    margin-right: 8%; 
    color: white;
    font-family: simhei;
    opacity: 1;
`

// background-color: #0B4F95;