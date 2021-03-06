import React from 'react';
import styled from 'styled-components';
import childlife from './assets/Child-Life-Project.png';
import movieclub from './assets/Movie-Club-Project.png';
import marvelcomic from './assets/Marvel-Comics-Project.png';


const Projects = () => {
    return (
        <Container id="projects_section">
            <Header>Projects</Header>
            <ProjectsUl>
                <ProjectList><a href="https://www.loom.com/share/32590a5fcd05438a87d3478e0c6b1121"><ProjectImage alt="Child Life Project" src={childlife} /></a></ProjectList>
                <br></br>
                <ProjectLabel>Child-Life Volunteer Portal</ProjectLabel>
                    <RepoList>
                        <Repo><RepoLink href="https://github.com/kevinpark07/Child-Life-Volunteer-App-Frontend.git">Frontend Repository</RepoLink></Repo>
                        <Repo><RepoLink href="https://github.com/kevinpark07/ChildLife-App-API.git">Backend Repository</RepoLink></Repo>
                    </RepoList>
                <ProjectList><a href="https://www.loom.com/share/169222650a884aec8e6955a6f018d30b"><ProjectImage alt="Movie Club Project" src={movieclub} /></a></ProjectList>
                <br></br>
                <ProjectLabel>The Movie Club</ProjectLabel>
                    <RepoList>
                        <Repo><RepoLink href="https://github.com/kevinpark07/The-Movie-Club-App.git">Frontend Repository</RepoLink></Repo>
                        <Repo><RepoLink href="https://github.com/kevinpark07/Movie-Club-API.git">Backend Repository</RepoLink></Repo>
                    </RepoList>
                <ProjectList><a href="https://www.loom.com/share/dae42fe311b94a768cd5c0dc8f68fd07"><ProjectImage alt="Marvel Comics Projct" src={marvelcomic} /></a></ProjectList>
                <br></br>
                <ProjectLabel>The Marvel Comics App</ProjectLabel>
                    <RepoList>
                        <Repo><RepoLink href="https://github.com/kevinpark07/Marvel-Comic-Project-Frontend.git">Frontend Repository</RepoLink></Repo>
                        <Repo><RepoLink href="https://github.com/kevinpark07/Marvel-Comics-Project-Backend.git">Backend Repository</RepoLink></Repo>
                    </RepoList>
            </ProjectsUl>
        </Container>
    )
}

export default Projects;

const Container = styled.div`
    width: 100%;
    height: auto;
    font-family: American Typewriter;
    margin-top: 0%;
`
const Header = styled.h1`
    padding-top: 5%;
    text-decoration: underline;
    color: white;
    font-size: 40pt;
    text-shadow: 2px 2px black;
    text-align: center;
`

const ProjectsUl = styled.ul`
    list-style-type: none;
    text-align: center; 
    padding: 0;
    margin: 0;
`

const ProjectLabel = styled.h4`
    color: white;
    text-shadow: 2px 2px black;
    font-size: 20pt;
    margin-top: 0%;
`

const RepoList = styled.ul`
    list-style-type: none;
`

const Repo = styled.li`
    display: inline-block;
    margin-right: 2%;
`
const RepoLink = styled.a`
    color: white;
    text-decoration: underline;
    background-color: black;
`

const ProjectList = styled.li`
    display: inline-block;
    font-size: 20px;
    padding: 20px;
    margin-top: 3%;
`

const ProjectImage = styled.img`
    width: 400px;
    height: 250px;
    border-style: solid;
    border-color: white;
    border-width: 5px;
    box-shadow: 5px 5px grey;
`