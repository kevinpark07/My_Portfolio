import React from 'react';
import styled from 'styled-components';
import headshot from './assets/Headshot.JPG';

const About = () => {
    return (
        <Container>
            <ProfileImage alt='profile_image' src={headshot} />
        </Container>
    )
}

export default About;

const Container = styled.div`

`

const ProfileImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 500px;
    width: 750px;
`