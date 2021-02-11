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
    margin-top: 10%;
    font-family: American Typewriter;
`

const AboutContainer = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: black;
    opacity: 0.80;
    box-shadow: 10px 10px grey;
    width: 75%;
    height: 50%;
    overflow: auto;
    align-item: center;
    justify-content: center;
`

const AboutHeader = styled.h1`
    padding-top: 5%;
    text-align: center;
    font-family: American Typewriter;
    text-decoration: underline;
    color: white;
    text-shadow: 2px 2px black;
    font-size: 30pt;
`

const AboutContent = styled.p`
    color: white;
    padding: 0px 50px 50px 50px;
    word-break: keep-all;
`



