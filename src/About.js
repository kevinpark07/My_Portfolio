import React from 'react';
import styled from 'styled-components';
import headshot from './assets/Headshot_cropped.jpg';

const About = () => {
    return (
        <Container>
            <ProfileImage alt='profile_image' src={headshot} />
                <AboutHeader>About Me</AboutHeader>
                <AboutContainer>
                    <AboutContent>
                        I am a full-stack software engineer currently living in Brooklyn, New York. I ama a recent graduate of the software engineering program at the FlatIron School 
                        where I have developed my technical skills and experience in React.js, JavaScript, Ruby, Ruby on Rails, Redux, CSS, Git, HTML, SQL, MVC, PostgreSQL, and SQLite3. 
                        I hope to build technology that will improve the lives of others. 
                        <br></br>
                        <br></br>
                        I was born and raised in Chicago, Illinois and I will defend Chicago pizza as the BEST pizza in the world! I have a degree in finance from Miami University - Oxford 
                        and in I also completed a post-baccalaureate program in pre-medical sciences at Columbia University. Prior to the COVID-19 pandemic, I was working as a production coordinator 
                        at Cipriani's 42nd St. location in Midtown Manhattan. 
                        <br></br>
                        <br></br>
                        I have played tennis since I was 5 years-old and became an instructor more than 7 years ago. I love food and in my free time you can find me in the kitchen trying to cook
                        a new recipe I've found. (Ask me about my chocolate cookie recipe!) In addition to my love of food, I have a passion for movies, music, both watching and playing sports, 
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
    background-image: url(https://images.unsplash.com/flagged/photo-1561023368-08a67ce21a09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80);
    background-size: 100%;
    
`

const AboutContainer = styled.div`
    position: absolute;
    right: 2%;
    top: 40%;
    width: 35%;
    padding: 5px;
    height: 500px;
    overflow-wrap: break-word;
    border-style: solid;
    border-color: black;
`

const AboutHeader = styled.h1`
    position: absolute;
    top: 28%;
    right: 15%;
`

const AboutContent = styled.p`
    position: absolute;
    top: 0%;
`

const ProfileImage = styled.img`
    display: block;
    margin-left: 8%;
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

