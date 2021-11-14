import React from 'react';
import styled from 'styled-components';
import BottomBar from './bottombar/BottomBar';
import userAvatar from "../image/userAvatar.png"
import Draggable from "react-draggable"
import "./avatarStage.css"
import Avatars from '../animations/avatars/Avatars';
import ShowGlowStick from '../animations/glowstickanimation/GlowStickAnimation';
import ShowHeart from '../animations/heartanimation/HeartAnimation';
//import JumpGroup from '../animations/jumpgroup/JumpGroup';




const Layout = styled.div`
height: 200px;
background-color: skyblue;
`;

const AvatarStage = () => {
    return (
        <>
        <Layout>
            <Draggable>
                <div>
                <img className="User" src={userAvatar} alt="userAvatar" />
                </div>
            </Draggable>
            
            <Avatars></Avatars>
        </Layout>
        
        <ShowGlowStick></ShowGlowStick>
        <ShowHeart></ShowHeart>
        {/*<JoinJumpGroup></JoinJumpGroup>*/}
        
        <BottomBar></BottomBar>
        </>
    );
};

export default AvatarStage;