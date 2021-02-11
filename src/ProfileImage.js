import React from 'react';
import styled from 'styled-components';
import headshot from './assets/linkedin_profile.jpg';

function ProfileImage() {

    return(
        <Container>
            <Image alt='profile_image' src={headshot} />
            <IntroContainer>
                <Welcome>Hi, my name is</Welcome>
                <br></br>
                <Name>Kevin Park</Name>
                <Welcome>____</Welcome>
                <br></br>
                <br></br>
                <Welcome>Frontend Software Engineer</Welcome>
            </IntroContainer> 
        </Container>
    )
}

export default ProfileImage;

const Container = styled.div`
    margin-top: 10%;
    width: 100%;
    height: 300px;
    align-item: center;
    opacity: 1.0;
`

const IntroContainer = styled.div`
    display: inline-block;
    margin-left: 20%;
    margin-right: auto;
    margin-top: 5%;
    color: white;
    font-family: American Typewriter;
`

const Welcome = styled.span`
    font-size: 15pt;
`
const Name = styled.h1`
    font-size: 30pt;
    text-shadow: 2px 2px black;
`
const Image = styled.img`
    display: inline-block;
    float: right;
    margin-right: 20%;
    width: 22%;
    height: auto;
    border-style: solid;
    border-color: transparent;
    border-radius: 50%;
`

// height: 650px;
//     width 100%;
//     background-image: url(https://images.unsplash.com/flagged/photo-1551373916-bdaddbf4f881?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80);
//     background-size: 100% 100%;
//     margin-top: 1%;



