import React from 'react';
import styled from 'styled-components';
import headshot from './assets/Headshot_cropped.jpg';

const About = () => {
    return (
        <Container>
            <ProfileImage alt='profile_image' src={headshot} />
        </Container>
    )
}

export default About;

const Container = styled.div`
    border-style: solid;
    border-color: transparent;
    height: 600px;
    width 100%;
    background-image: url(https://images.unsplash.com/photo-1563865436914-44ee14a35e4b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80);
    background-size:100% 100%;
`

const ProfileImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: 15%;
    margin-top: 8%;
    height: 350px;
    width: 300px;
    border: 5px solid black;
    border-color: transparent;
    border-radius: 50%;
`