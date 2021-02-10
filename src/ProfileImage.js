import React from 'react';
import styled from 'styled-components';
import headshot from './assets/profile_image2.png';

function ProfileImage() {

    return(
        <Container>
            <Image alt='profile_image' src={headshot} />
        </Container>
    )
}

export default ProfileImage;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 650px;
    width 100%;
    background-image: url(https://images.unsplash.com/flagged/photo-1551373916-bdaddbf4f881?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80);
    background-size: 100% 100%;
    margin-top: 1%;
`


const Image = styled.img`
    height: 325px;
    width: 325px;
`

// border-style: solid;
//     border-color: transparent;
//     border-radius: 50%;