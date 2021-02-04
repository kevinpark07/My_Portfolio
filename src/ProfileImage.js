import React from 'react';
import styled from 'styled-components';
import headshot from './assets/Headshot_cropped.jpg';

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
    height: 650px;
    width 100%;
    background-image: url(https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80);
    background-size: 100% 100%;
`

const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8%;
    height: 325px;
    width: 300px;
    border: 5px solid;
    border-color: #088117;
    border-width: 10px;
    border-radius: 50%;
`

