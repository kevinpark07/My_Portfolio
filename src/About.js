import React from 'react';
import styled from 'styled-components';
import headshot from './assets/Headshot_cropped.jpg';

const About = () => {
    return (
        <Container>
            <ProfileImage alt='profile_image' src={headshot} />
                <AboutHeader>About Me</AboutHeader>
                <AboutContent>Hello my name is Kevin Park. Welcome to my page!</AboutContent>
        </Container>
    )
}

export default About;

const Container = styled.div`
    height: 600px;
    width 100%;
    background-image: url(https://images.unsplash.com/flagged/photo-1561023368-08a67ce21a09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80);
    background-size: 100%;
    
`

const AboutHeader = styled.h1`
    position: absolute;
    top: 28%;
    right: 15%;
`

const AboutContent = styled.p`
    position: absolute;
    top: 40%;
    right: 10%;
`

const ProfileImage = styled.img`
    display: block;
    margin-left: 5%;
    margin-right: auto;
    margin-top: 8%;
    height: 325px;
    width: 300px;
    border: 5px solid black;
    border-color: #DAE4DA;
    border-width: 10px;
    border-radius: 50%;
    box-shadow: 5px 5px #BFC7BF;
`

