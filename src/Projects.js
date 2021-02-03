import React from 'react';
import styled from 'styled-components';


const Projects = () => {
    return (
        <Container>
            <ProjectsUl>
                <ProjectList><a href="https://www.loom.com/share/32590a5fcd05438a87d3478e0c6b1121">Child Life Volunteer Application</a></ProjectList>
                    <ul>
                        <li><a href="https://github.com/kevinpark07/Child-Life-Volunteer-App-Frontend.git">GitHub Repo (Frontend)</a></li>
                        <li><a href="https://github.com/kevinpark07/ChildLife-App-API.git">GitHub Repo (Backend)</a></li>
                    </ul>
                <ProjectList><a href="https://www.loom.com/share/169222650a884aec8e6955a6f018d30b">The Movie Club Application</a></ProjectList>
                    <ul>
                        <li><a href="https://github.com/kevinpark07/The-Movie-Club-App.git">GitHub Repo (Frontend)</a></li>
                        <li><a href="https://github.com/kevinpark07/Movie-Club-API.git">GitHub Repo (Backend)</a></li>
                    </ul>
                <ProjectList><a href="https://www.loom.com/share/dae42fe311b94a768cd5c0dc8f68fd07">The Marvel Comic Book Application</a></ProjectList>
                    <ul>
                        <li><a href="https://github.com/kevinpark07/Marvel-Comic-Project-Frontend.git">GitHub Repo (Frontend)</a></li>
                        <li><a href="https://github.com/kevinpark07/Marvel-Comics-Project-Backend.git">GitHub Repo (Backend)</a></li>
                    </ul>
            </ProjectsUl>
        </Container>
    )
}

export default Projects;

const Container = styled.div`
    background-image: url(https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80);
    background-size: 100%;
    width: 100%;
    height: 750px;
`

const ProjectsUl = styled.ul`
    list-style-type: none;
    text-align: center; 
    padding: 0;
    margin: 0;
`

const ProjectList = styled.li`
    display: inline-block;
    font-size: 20px;
    padding: 20px;
`

const ProjectImage = styled.img`
    width: 200px;
    height: 200px;
`