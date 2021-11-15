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
                
                
                <div className= "userBlock">
                <ShowHeart id='heart' className="showHeart"/>
                <ShowGlowStick id='glowstick'/>
                <img className="User" src={userAvatar} alt="userAvatar"/>
                       
            
                </div>
                
               
            
            </Draggable>
          

            <Avatars></Avatars>
        </Layout>
        
        
        {/*<JoinJumpGroup></JoinJumpGroup>*/}
        
        <BottomBar></BottomBar>
        </>
    );
};

export default AvatarStage;