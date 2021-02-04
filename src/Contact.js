import React from 'react';
import styled from 'styled-components';
import github from './assets/github_icon.png';
import facebook from './assets/facebook_icon.png';
import linkedin from './assets/linkedin_icon.png';

const Contact = () => {
    return (
        <Container id="contact_section">
            <Header>Contact Me</Header>
            <p><b>Email:</b> <a href="mailto:kevinprk291@gmail.com">kevinpark291@gmail.com</a></p>
            <a href="https://github.com/kevinpark07/"><SocialMedia alt="GitHub profile" src={github}/></a>
            <a href="https://www.linkedin.com/in/kevinpark07/"><SocialMedia alt="LinkedIn profile" src={linkedin}/></a>
            <a href="https://www.facebook.com/kevinpark07/"><SocialMedia alt="Facebook profile" src={facebook}/></a>
        </Container>
    )
}

export default Contact;

const Container = styled.div`
    text-align: center;
    padding-bottom: 5%;
    margin-top: 5%;
    font-family: American Typewriter;
`

const Header = styled.h1`
    top:0;
    text-decoration: underline;
`

const SocialMedia = styled.img`
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-right: 2%;
`