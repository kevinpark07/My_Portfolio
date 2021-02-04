import React from 'react';
import styled from 'styled-components';


const About = () => {
    return (
        <Container id="about_section">
                <AboutHeader>About Me</AboutHeader>
                <AboutContainer>
                    <AboutContent>
                        I am a full-stack software engineer currently living in Brooklyn, New York. I am a recent graduate of the software engineering program at the FlatIron School 
                        where I developed my technical skills in React.js, JavaScript, Ruby, Ruby on Rails, Redux, CSS, Git, HTML, SQL, MVC, PostgreSQL, and SQLite3. 
                        I hope to build technology that will improve the lives of others. 
                        <br></br>
                        <br></br>
                        I was born and raised in Chicago, Illinois and I am a staunch devotee of Chicago-style pizza. I have a degree in finance from Miami University - Oxford 
                        and I also completed a post-baccalaureate program in pre-medical sciences at Columbia University. Prior to the COVID-19 pandemic, I was working as a production coordinator 
                        at Cipriani's 42nd St. location in Midtown Manhattan. 
                        <br></br>
                        <br></br>
                        I've played tennis since I was five years-old and now I'm an instructor that has been teaching for over 7 years. I am a lover of food and in my free time you'll find me in the kitchen trying to cook
                        a new recipe I've found. In addition to my love of food, I have a passion for movies, music, both watching and playing sports, 
                        and volunteering at New York Presbyterian's Morgan Stanley Children's Hospital. 
                    </AboutContent>
                </AboutContainer>
        </Container>
    )
}

export default About;

const Container = styled.div`
    height: 600px;
    width 100%;
    background-image: url(https://images.unsplash.com/photo-1598846021811-c23fa9263bb7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80);
    background-size: 100% 100%;
    border-style: inset;
    border-color: white;
    margin-top: 10%;
    font-family: American Typewriter;
`

const AboutContainer = styled.div`
    position: absolute;
    background-color: #DCDACB;
    opacity: 0.85;
    height: 325px;
    box-shadow: 10px 10px grey;
    right: 12.5%;
    left: auto;
    margin-top: 10%;
    width: 75%;
    overflow: auto;
`

const AboutHeader = styled.h1`
    position: absolute;
    margin-top: 5%;
    left: 45%;
    font-family: American Typewriter;
    text-decoration: underline;
    color: white;
`

const AboutContent = styled.p`
    position: absolute;
    top: 0%;
    padding: 0px 50px 50px 50px;
`



