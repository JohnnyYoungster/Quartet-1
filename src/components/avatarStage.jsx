import React from 'react';
import styled from 'styled-components';
import BottomBar from './bottombar/BottomBar';
import userAvatar from "../image/userAvatar.png"
import Draggable from "react-draggable"
import "./avatarStage.css"
import Avatars from '../animations/avatars/Avatars';
import ShowGlowStick from '../animations/glowstickanimation/GlowStickAnimation';
import ShowHeart from '../animations/heartanimation/HeartAnimation';

const Layout = styled.div`
height: 200px;
background-color: skyblue;
`;

const AvatarStage = () => {
    return (
        <>
        <Layout>
            <Draggable>
                <img className="userAvatar" src={userAvatar} alt="userAvatar" />
            </Draggable>

            <Avatars></Avatars>
        </Layout>

        <ShowGlowStick></ShowGlowStick>
        <ShowHeart></ShowHeart>
        <BottomBar></BottomBar>
        </>
    );
};

export default AvatarStage;