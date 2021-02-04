import React from 'react';
import styled from 'styled-components';
import headshot from './assets/Headshot_cropped.jpg';
import stars from './assets/starrynight.mp4';

function ProfileImage() {

    return(
        <Container>
            <Image alt='profile_image' src={headshot} />
        </Container>
    )
}

export default ProfileImage;

const Container = styled.div`
    border-style: inset;
    border-color: white;    
    height: 600px;
    width 100%;
    background-image: url(https://images.unsplash.com/photo-1595012651352-9b39b99c341b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80);
    background-size: 100% 100%;
`


const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8%;
    height: 325px;
    width: 300px;
    border-style: solid;
    border-color: transparent;
    border-radius: 50%;
`

